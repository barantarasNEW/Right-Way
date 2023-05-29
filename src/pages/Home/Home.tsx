import { Link } from 'react-router-dom';
import './Home.scss';
import { useAppSelector } from '../../hooks/useRedux';
import { selectUser } from '../../features/user';

const Home = () => {
  const userName = useAppSelector(selectUser);

  return (
    <section className="home">
      <div className="container">
        <div className="home__wrapper">
          <h1 className="title">
            {`Welcome, ${userName.user.firstName}`}
          </h1>
  
          <p className="home__subtitle">
            Let&apos;s start
          </p>
  
          <Link className="home__btn" to="/random">
            Start
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;