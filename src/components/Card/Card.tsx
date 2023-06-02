import './Card.scss';

import { Country } from '../../types/Country';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  country: Country;
};

export const Card: React.FC<Props> = ({ country: {
  name,
  flag,
} }) => {
  const location = useLocation().pathname;

  return (
    <div className="card">
      <img className="card__img" src={flag} alt="flag" />
  
      <h2 className="card__name">
        {name}
      </h2>

      <Link
        className="card__link"
        to={`${location}/${name}`}
      >
        View more
      </Link>
    </div>
  );
};