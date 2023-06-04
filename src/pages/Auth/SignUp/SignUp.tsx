import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import cn from 'classnames';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../config/firebase";
import { useAppDispatch } from "../../../hooks/useRedux";
import { saveAdditionalUserData } from "../../../helpers/saveAdditionalUserData";
import { setUser } from "../../../features/user";
import { AuthErrors } from "../../../types/AuthErrors";

type Props = {
  setIsLoading: (value: boolean) => void;
}; 

const SignUp: React.FC<Props> = ({ setIsLoading }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<AuthErrors[]>([]);

  const dispatch = useAppDispatch();
  const auth = getAuth(app);
  const navigate = useNavigate();

  const checkValidInput = () => {
    const validRegexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (firstName.length < 3) {
      setErrors(currErrors => ([ ...currErrors, AuthErrors.FIRSTNAME ]));
    } else {
      setErrors(currErrors => currErrors.filter(currError => currError !== AuthErrors.FIRSTNAME));
    }

    if (lastName.length < 3) {
      setErrors(currErrors => ([ ...currErrors, AuthErrors.LASTNAME ]));
    } else {
      setErrors(currErrors => currErrors.filter(currError => currError !== AuthErrors.LASTNAME));
    }

    if (!email.match(validRegexEmail)) {
      setErrors(currErrors => ([ ...currErrors, AuthErrors.EMAIL ]));
    } else {
      setErrors(currErrors => currErrors.filter(currError => currError !== AuthErrors.EMAIL));
    }

    if (password.length < 6) {
      setErrors(currErrors => ([ ...currErrors, AuthErrors.PASSWORD ]));
    } else {
      setErrors(currErrors => currErrors.filter(currError => currError !== AuthErrors.PASSWORD));
    }
  };

  const signUp = () => {
    checkValidInput();

    if (errors.length) {
      return;
    }

    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        dispatch(setUser({ email, password, firstName, lastName }));
        saveAdditionalUserData(res.user.uid, { firstName, lastName, password });
        navigate("/");
      }).catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <form
      className="sign"
      autoComplete="true"
      onSubmit={e => e.preventDefault()}
    >
      <input
        className={cn(
          "input",
          { "input--error": errors.includes(AuthErrors.FIRSTNAME) }
        )}
        type="text"
        placeholder="First name"
        autoComplete="true"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
    
      <input
        className={cn(
          "input",
          { "input--error": errors.includes(AuthErrors.LASTNAME) }
        )}
        type="text"
        placeholder="Last name"
        autoComplete="true"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />

      <input
        className={cn(
          "input",
          { "input--error": errors.includes(AuthErrors.EMAIL) }
        )}
        type="email"
        placeholder="Email"
        autoComplete="true"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
            
      <input
        className={cn(
          "input",
          { "input--error": errors.includes(AuthErrors.PASSWORD) }
        )}
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