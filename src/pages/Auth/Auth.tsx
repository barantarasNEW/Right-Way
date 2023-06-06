import { useState } from 'react';
import { useLocation } from 'react-router';
import cn from 'classnames';
import './Auth.scss';

import Loader from '../../components/Loader/Loader';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';

const authCn = (isLoading: boolean) => cn(
  "auth", { "auth--dis": isLoading }
);

const inputCn = (isError: boolean) => cn(
  "input", { error: isError }
);

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation().pathname;
  const isSignUp = location === '/signUp';
  
  return (
    <>
      <section
        className={authCn(isLoading)}
        style={{ backgroundImage: "url(./img/main2.jpg)" }}
      >
        <div className="container">
          <div className="auth__wrapper">
            <h1 className="title auth__title">
              Gateway to the
              <br />
              World
            </h1>
  
            {isSignUp
              ? <SignUp setIsLoading={setIsLoading} inputCn={inputCn} />
              : <SignIn setIsLoading={setIsLoading} inputCn={inputCn} />}
          </div>
        </div>
      </section>
  
      {isLoading && <Loader />}
    </>
  );
};

export default Auth;