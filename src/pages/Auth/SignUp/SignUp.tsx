import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../config/firebase";
import { useAppDispatch } from "../../../hooks/useRedux";
import { saveAdditionalUserData } from "../../../helpers/saveAdditionalUserData";
import { setUser } from "../../../features/user";
import { AuthErrors } from "../../../types/AuthErrors";
import { checkValidInput } from "../../../helpers/checkValidInput";
import Modal from "../../../components/Modal/Modal";

type Props = {
  setIsLoading: (value: boolean) => void;
  inputCn: any;
}; 

const SignUp: React.FC<Props> = ({ setIsLoading, inputCn }) => {
  const dispatch = useAppDispatch();
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<AuthErrors[]>([]);
  const [userInUsed, setUserInUsed] = useState(false);

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

  const signUp = () => {
    let isError = false;
    const isValidEmail = checkValidInput(AuthErrors.EMAIL, email);
    const isValidPassword = checkValidInput(AuthErrors.PASSWORD, password);
    const isValidFirstName = checkValidInput(AuthErrors.FIRSTNAME, firstName);
    const isValidLastName = checkValidInput(AuthErrors.LASTNAME, lastName);

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

    if (!isValidFirstName) {
      setErrors(currentErrors => (
        [...currentErrors, AuthErrors.FIRSTNAME]
      ));

      isError = true;
    }

    if (!isValidLastName) {
      setErrors(currentErrors => (
        [...currentErrors, AuthErrors.LASTNAME]
      ));

      isError = true;
    }
    
    if (isError) {
      return;
    }

    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        dispatch(setUser({ email, password, firstName, lastName }));
        saveAdditionalUserData(res.user.uid, { firstName, lastName, password });
        navigate("/");
      }).catch(() => setUserInUsed(true))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <form
        className="sign"
        autoComplete="true"
        onSubmit={e => e.preventDefault()}
      >
        <input
          className={inputCn(errors.includes(AuthErrors.FIRSTNAME))}
          type="text"
          placeholder="First name"
          autoComplete="true"
          value={firstName}
          onChange={e => onChange(e, AuthErrors.FIRSTNAME, setFirstName)}
        />
      
        <input
          className={inputCn(errors.includes(AuthErrors.LASTNAME))}
          type="text"
          placeholder="Last name"
          autoComplete="true"
          value={lastName}
          onChange={e => onChange(e, AuthErrors.LASTNAME, setLastName)}
        />
  
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
          onClick={signUp}
          disabled={!!errors.length}
          type="submit"
        >
          Sign up
        </button>
        <Link className="sign__link" to="/signIn">
          Sign in
        </Link>
      </form>

      {userInUsed && <Modal title="User already in use" />}
    </>
  );
};

export default SignUp;