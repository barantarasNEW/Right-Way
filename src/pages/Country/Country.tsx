import { useEffect, useState } from "react";
import { useParams } from "react-router";
import './Country.scss';

import { getCountry } from "../../api/getCountry";
import { Country as CountryType } from "../../types/Country";

import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState<CountryType | null>(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const data = [
    { title: 'Capital:', text: country?.capital },
    { title: 'Region:', text: country?.region },
    { title: 'Population:', text: country?.population },
    { title: 'Independent:', text: country?.independent ? 'Yes' : 'No' },
    { title: 'Currencies:', text: country?.currencies.map(currency => currency.name).join(' , ')},
    { title: 'Languages:', text: country?.languages.join(' , ')},
  ];

  useEffect(() => {
    if (id) {
      setLoading(true);

      getCountry(id)
        .then(res => setCountry(res))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!country) {
    return <p>Not found</p>;
  }

  return (
    <section className="country">
      <div className="container">
        <div className="country__wrapper">
          <img className="country__img" src={country.flag} alt="flag" />
          
          <h2 className="country__name">
            {country.name}
          </h2>

          <ul className="country__descriptions">
            {data.map(({ title, text }) => (
              <li key={title} className="country__description">
                <p className="country__description__title">
                  {title}
                </p>

                <p className="country__description__text">
                  {text}
                </p>
              </li>
            ))}
          </ul>

          <Link
            className="country__link"
            to={country.map}
            target="_blank"
          >
            Go to the map
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Country;