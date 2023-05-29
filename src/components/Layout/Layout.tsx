import { Outlet } from 'react-router';
import './Layout.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Auth from '../../pages/Auth/Auth';
// import { useAppSelector } from '../../hooks/useRedux';
// import { selectUser } from '../../features/user';

const Layout = () => {
  // const user = useAppSelector(selectUser);

  if (false) {
    return <Auth />;
  }

  return (
    <>
      <div className="wrapper" style={{ backgroundImage: "url(./img/main.jpg)" }}>
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
