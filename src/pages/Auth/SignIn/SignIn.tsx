import { useState } from "react";
import { Link } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../config/firebase";
import { useAppDispatch } from "../../../hooks/useRedux";
import { setUser } from "../../../features/user";
import { getAdditionalUserData } from "../../../helpers/getAdditionalUserData";
import { User } from "../../../types/User";

type Props = {
  setIsLoading: (value: boolean) => void;
}; 

const SignIn: React.FC<Props> = ({ setIsLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app);
  const dispatch = useAppDispatch();

  const signIn = () => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(res => {
        getAdditionalUserData(res.user.uid)
          .then(data => {
            const result = {
              email,
              password,
              firstName: data?.firstName,
              lastName: data?.lastName,
            };

            dispatch(setUser(result as User));
          });
      }).catch(() => {
        console.log("Not found user");
      }).finally(() => setIsLoading(false));
  };

  return (
    <form className="sign">
      <input
        className="input"
        type="email"
        placeholder="Email"
        autoComplete="true"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
              
      <input
        className="input"
        type="password"
        placeholder="Password"
        autoComplete="true"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    
      <button
        className="btn"
        onClick={signIn}
        type="submit"
      >
        Sign In
      </button>
      <Link
        className="sign__link"
        to="/signUp"
      >
        Sign Up
      </Link>
    </form>
  );
};

export default SignIn;