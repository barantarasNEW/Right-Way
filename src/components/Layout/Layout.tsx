import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import './Layout.scss';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { getAdditionalUserData } from '../../helpers/getAdditionalUserData';
import * as countriesNamesActions from '../../features/countriesName';
import { setIsSigned, setUser } from '../../features/user';
import { User } from '../../types/User';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Auth from '../../pages/Auth/Auth';
import Loader from '../Loader/Loader';

const Layout = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);
  const location = useLocation().pathname;
  const { loading } = useAppSelector(state => state.countriesName);
  
  const [isSearch, setSearch] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    dispatch(countriesNamesActions.init());

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setIsSigned(true));

        if (location === '/signUp' || location === '/signIn') {
          navigate("/");
        }
        getAdditionalUserData(user.uid)
          .then(data => {
            const result = {
              email: user.email,
              password: data?.password,
              firstName: data?.firstName,
              lastName: data?.lastName,
            };

            dispatch(setUser(result as User));
          }).finally(() => setIsLoadingData(false));
      } else {
        setIsLoadingData(false);
      }
    });
  }, []);

  const setToggleSearch = () => setSearch(currSearch => !currSearch);

  if (!user.isSigned && isLoadingData === false) {
    return <Auth />;
  }

  return (
    <div
      className="wrapper"
      style={{ backgroundImage: "url(./img/main.jpg)" }}
      onClick={() => setSearch(false)}
    >
      {loading || isLoadingData
        ? <Loader />
        : (
          <>
            <Header
              isSearch={isSearch}
              setSearch={setSearch}
              setToggleSearch={setToggleSearch}
            />
            <main className="main">
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </main>
            <Footer />
          </>
        )
      }
    </div>
  );
};

export default Layout;
