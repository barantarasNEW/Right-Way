import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../config/firebase";

import { setUser } from "../../../features/user";
import { useAppDispatch } from "../../../hooks/useRedux";
import { getAdditionalUserData } from "../../../helpers/getAdditionalUserData";
import { User } from "../../../types/User";

import Modal from "../../../components/Modal/Modal";
import { checkValidInput } from "../../../helpers/checkValidInput";
import { AuthErrors } from "../../../types/AuthErrors";

type Props = {
  setIsLoading: (value: boolean) => void;
  inputCn: any;
}; 

const SignIn: React.FC<Props> = ({ setIsLoading, inputCn }) => {
  const auth = getAuth(app);
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<AuthErrors[]>([]);
  const [userNotFound, setUserNotFound] = useState(false);

  const signIn = () => {
    let isError = false;
    const isValidEmail = checkValidInput(AuthErrors.EMAIL, email);
    const isValidPassword = checkValidInput(AuthErrors.PASSWORD, password);

    if (!isValidEmail) {
      setErrors(currentErrors => (
        [...currentErrors, AuthErrors.EMAIL]
      ));

      isError = true;
    }

    if (!isValidPassword) {
      setErrors(currentErrors => (
        [...currentErrors, AuthErrors.PASSWORD]
      ));

      isError = true;
    }
    
    if (isError) {
      return;
    }

    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(res => {
        getAdditionalUserData(res.user.uid)
          .then(data => {
            const fullData = {
              email,
              password,
              firstName: data?.firstName,
              lastName: data?.lastName,
            };

            dispatch(setUser(fullData as User));
            setUserNotFound(false);
          });
      }).catch(() => setUserNotFound(true))
      .finally(() => setIsLoading(false));
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement>,
    errorType: AuthErrors,
    setInput: (value: string) => void,
  ) => {
    const value = e.target.value;
    const isValidInput = checkValidInput(errorType, value);

    setInput(value);
  
    if (isValidInput) {
      setErrors(currErrors => currErrors
        .filter(currError => currError !== errorType));
    }
  };

  return (
    <>
      <form className="sign" onSubmit={e => e.preventDefault()}>
        <input
          className={inputCn(errors.includes(AuthErrors.EMAIL))}
          type="email"
          placeholder="Email"
          autoComplete="true"
          value={email}
          onChange={e => onChange(e, AuthErrors.EMAIL, setEmail)}
        />
                
        <input
          className={inputCn(errors.includes(AuthErrors.PASSWORD))}
          type="password"
          placeholder="Password"
          autoComplete="true"
          value={password}
          onChange={e => onChange(e, AuthErrors.PASSWORD, setPassword)}
        />
      
        <button
          className="btn"
          onClick={signIn}
          type="submit"
          disabled={!!errors.length}
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

      {userNotFound && <Modal title="User not found" />}
    </>
  );
};

export default SignIn;