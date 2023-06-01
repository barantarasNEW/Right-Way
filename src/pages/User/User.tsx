import { useState } from 'react';
import { useNavigate } from 'react-router';
import { getAuth, signOut, updateEmail, updatePassword } from "firebase/auth";
import './User.scss';

import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setIsSigned, setUser } from '../../features/user';
import { updateAdditionalUserData } from '../../helpers/updateAdditionalUserData';

import Loader from '../../components/Loader/Loader';

const User = () => {
  const user = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [isChange, setIsChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  const onClickSave = async () => {
    setIsLoading(true);

    if (auth.currentUser) {
      let emailOrPasswordIsChanged;

      if (email !== user.email) {
        emailOrPasswordIsChanged = true;
      }

      if (password !== user.password) {
        emailOrPasswordIsChanged = true;
      }

      if (user.firstName !== firstName ||
        user.lastName !== lastName ||
        password !== user.password) {
        await updateAdditionalUserData(
          auth.currentUser.uid,
          { firstName, lastName, password }
        );
      }

      if (emailOrPasswordIsChanged) {
        await updateEmail(auth.currentUser, email);
        await updatePassword(auth.currentUser, password);

        onClickExit();
      }
    }

    setIsChange(false);
    setIsLoading(false);
  };

  const onClickExit = () => {
    setIsLoading(true);

    signOut(auth).then(() => {
      dispatch(setUser({
        firstName: "",
        lastName: "", 
        password: "", 
        email: "" 
      }));
      dispatch(setIsSigned(false));
      navigate('/signIn');
    }).catch((error) => {
      console.log(error);
    }).finally(() => setIsLoading(false));
  };

  return (
    <>
      <section className="user">
        <div className="container">
          <div className="user__wrapper">
            <button
              className="user__sign-out"
              onClick={onClickExit}
            >
              <img
                className="user__icon"
                src="./img/svg/exit.svg"
                alt="icon"
              />
            </button>
  
            <div className="user__input-wrapper">
              <label className="user__label">
                First name
                <input
                  className="input"
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  disabled={!isChange}
                />
              </label>
    
              <label className="user__label">
                Last name
                <input
                  className="input"
                  type="text"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  disabled={!isChange}
                />
              </label>
    
              <label className="user__label">
                Email
                <input
                  className="input"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={!isChange}
                />
              </label>
    
              <label className="user__label">
                Password
                <input
                  className="input"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  disabled={!isChange}
                />
              </label>
            </div>
  
            <div className="user__btns">
              {isChange && (
                <button
                  className="btn"
                  onClick={onClickSave}
                >
                  Save
                </button>
              )}
              
              <button
                className="btn"
                onClick={() => setIsChange(true)}
                disabled={isChange}
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </section>

      {isLoading && <Loader />}
    </>
  );
};

export default User;