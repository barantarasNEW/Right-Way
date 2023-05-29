import { useState } from 'react';
import { getAuth, signOut, updateEmail, updatePassword } from "firebase/auth";
import cn from 'classnames';
import './User.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { selectUser, setIsSigned, setUser } from '../../features/user';
import { useNavigate } from 'react-router';
import { updateAdditionalUserData } from '../../helpers/updateAdditionalUserData';

const User = () => {
  const user = useAppSelector(selectUser).user;
  const dispatch = useAppDispatch();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [isChange, setIsChange] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  const onClickChange = () => setIsChange(true);

  const onClickExit = () => {
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
    });
  };

  const onClickSave = () => {
    if (auth.currentUser) {
      let isChangedEmailOrPassword;

      if (user.email !== email) {
        updateEmail(auth.currentUser, email);
        isChangedEmailOrPassword = true;
      }

      if (user.password !== password) {
        updatePassword(auth.currentUser, password);
        isChangedEmailOrPassword = true;
      }

      if (isChangedEmailOrPassword) {
        onClickExit();
      }

      updateAdditionalUserData(auth.currentUser.uid, { firstName, lastName });
    }

    setIsChange(false);
  };

  return (
    <section className="user">
      <div className="container">
        <div className="user__wrapper">
          <button
            className="user__sign-out"
            onClick={onClickExit}
          >
            <img className="user__icon" src="./img/svg/exit.svg" alt="icon" />
          </button>

          <div className="user__input-wrapper">
            <label className="user__label">
              First name
              <input
                className={cn("input", { "input--dis": !isChange })}
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                disabled={!isChange}
              />
            </label>
  
            <label className="user__label">
              Last name
              <input
                className={cn("input", { "input--dis": !isChange })}
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                disabled={!isChange}
              />
            </label>
  
            <label className="user__label">
              Email
              <input
                className={cn("input", { "input--dis": !isChange })}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={!isChange}
              />
            </label>
  
            <label className="user__label">
              Password
              <input
                className={cn("input", { "input--dis": !isChange })}
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
              className={cn("btn", { "btn--dis": isChange } )}
              onClick={onClickChange}
              disabled={isChange}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;