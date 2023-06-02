import { useEffect, useState } from "react";
import './Top.scss';

import { getCountry } from "../../api/getCountry";
import { Country } from "../../types/Country";
import { topCountries } from "./constants";

import Loader from "../../components/Loader/Loader";
import { Card } from "../../components/Card/Card";

const Top = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchingCountry();
  }, []);

  const fetchingCountry = async () => {
    const result = topCountries.map(country => getCountry(country));
    const response = await Promise.all(result);

    setCountries(response.flat());
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="top">
      <div className="container">
        <div className="top__wrapper">
          <ul className="top__list">
            {countries.map(country => (
              <li key={country.name} className="top__item">
                <Card country={country}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Top;