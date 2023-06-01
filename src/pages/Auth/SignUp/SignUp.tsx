import { useState } from "react";
import { Link } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../config/firebase";
import { useAppDispatch } from "../../../hooks/useRedux";
import { saveAdditionalUserData } from "../../../helpers/saveAdditionalUserData";
import { setUser } from "../../../features/user";

type Props = {
  setIsLoading: (value: boolean) => void;
}; 

const SignUp: React.FC<Props> = ({ setIsLoading }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const auth = getAuth(app);

  const signUp = () => {
    setIsLoading(true);
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch(setUser({ email, password, firstName, lastName }));
        saveAdditionalUserData(res.user.uid, { firstName, lastName, password });
      })
      .catch((error) => {
        console.log(error);
      }).finally(() => setIsLoading(false));
  };

  return (
    <form className="sign" autoComplete="true">
      <input
        className="input"
        type="text"
        placeholder="First name"
        autoComplete="true"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
    
      <input
        className="input"
        type="text"
        placeholder="Last name"
        autoComplete="true"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />

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
        onClick={signUp}
        type="submit"
      >
        Sign up
      </button>
      <Link className="sign__link" to="/signIn">
        Sign in
      </Link>
    </form>
  );
};

export default SignUp;