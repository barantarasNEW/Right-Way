import { Link } from 'react-router-dom';
import './Home.scss';

import { useAppSelector } from '../../hooks/useRedux';

const Home = () => {
  const user = useAppSelector(state => state.user).user;

  return (
    <section className="home">
      <div className="container">
        <div className="home__wrapper">
          <h1 className="title home__title">
            {`Welcome, ${user.firstName}`}
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