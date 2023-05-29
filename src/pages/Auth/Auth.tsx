import { useEffect, useState } from "react";
import './Auth.scss';
import cn from 'classnames';
import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../config/firebase";
import { useAppDispatch } from "../../hooks/useRedux";
import { setUser, setIsSigned } from "../../features/user";
import { setModal } from "../../features/modal";
import { getAdditionalUserData } from "../../helpers/getAdditionalUserData";
import { saveAdditionalUserData } from "../../helpers/saveAdditionalUserData";
import { User } from "../../types/User";

const Auth = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app);
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const isSignUp = location === "/signUp";

  useEffect(() => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }, [location]);

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch(setUser({ email, password, firstName, lastName }));
        dispatch(setIsSigned(true));
        navigate("/home");
        saveAdditionalUserData(res.user.uid, { firstName, lastName });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(res => {
        dispatch(setIsSigned(true));
        navigate("/");
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
      })
      .catch(() => {
        dispatch(setModal("Not found user"));
      });
  };

  return (
    <section
      className="auth"
      style={{ backgroundImage: "url(./img/main2.jpg)" }}
    >
      <div className="container">
        <div className="auth__wrapper">
          <h1 className="title auth__title">
            Gateway to the
            <br />
            World
          </h1>

          {isSignUp && (
            <>
              <input
                className={cn(
                  "input",
                )}
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
  
              <input
                className={cn(
                  "input",
                )}
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </>
          )}

          <input
            className={cn(
              "input",
            )}
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          
          <input
            className={cn(
              "input",
            )}
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          {isSignUp
            ? (
              <>
                <button
                  className="btn"
                  onClick={signUp}
                >
                  Sign up
                </button>
                <Link
                  className="auth__sign-link"
                  to="/signIn"
                >
                  Sign in
                </Link>
              </>
            )
            : (
              <>
                <button
                  className="btn"
                  onClick={signIn}
                >
                  Sign In
                </button>
                <Link
                  className="auth__sign-link"
                  to="/signUp"
                >
                  Sign Up
                </Link>
              </>
            )}
        </div>
      </div>
    </section>
  );
};

export default Auth;