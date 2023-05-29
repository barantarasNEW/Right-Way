import { Country } from '../../types/Country';
import './Card.scss';

type Props = {
  country: Country;
  onClick: () => void;
};

export const Card: React.FC<Props> = ({ onClick, country: {
  name,
  region,
  capital,
  flag,
  population
} }) => {
  const data = [
    { title: 'Capital', text: capital },
    { title: 'Region', text: region },
    { title: 'Population', text: population },
  ];

  return (
    <div className="card">
      <div className="card__left">
        <img className="card__img" src={flag} alt="flag" />
  
        <h2 className="card__title">
          {name}
        </h2>
  
        <ul className="card__descriptions">
          {data.map(({ title, text }) => (
            <li key={title} className="card__description">
              <p className="card__description-text">
                {title}
              </p>
              <p className="card__text">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="card__right">
        <button
          className="card__btn"
          onClick={onClick}
        >
          Random
        </button>
      </div>
    </div>
  );
};