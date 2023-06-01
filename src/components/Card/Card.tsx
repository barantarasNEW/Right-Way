import './Card.scss';

import { Country } from '../../types/Country';

type Props = {
  country: Country;
};

export const Card: React.FC<Props> = ({ country: {
  name,
  region,
  capital,
  flag,
  population
} }) => {
  const data = [
    { title: 'Capital:', text: capital },
    { title: 'Region:', text: region },
    { title: 'Population:', text: population },
  ];

  return (
    <div className="card">
      <img className="card__img" src={flag} alt="flag" />
  
      <h2 className="card__name">
        {name}
      </h2>

      <ul className="card__descriptions">
        {data.map(({ title, text }) => (
          <li key={title} className="card__description">
            <p className="card__description__title">
              {title}
            </p>

            <p className="card__description__text">
              {text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};