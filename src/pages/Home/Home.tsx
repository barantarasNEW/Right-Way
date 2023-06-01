import { Link } from 'react-router-dom';
import './Home.scss';

import { useAppSelector } from '../../hooks/useRedux';

const Home = () => {
  const userName = useAppSelector(state => state.user);

  return (
    <section className="home">
      <div className="container">
        <div className="home__wrapper">
          <h1 className="title home__title">
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