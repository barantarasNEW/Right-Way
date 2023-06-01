import { useCallback, useEffect, useState } from "react";
import random from 'lodash.random';
import './Random.scss';

import { fetchCountry } from "../../api/fetchCountry";
import { useAppSelector } from "../../hooks/useRedux";
import { Country } from "../../types/Country";

import { Card } from "../../components/Card/Card";
import Loader from '../../components/Loader/Loader';

const Random = () => {
  const { names } = useAppSelector(state => state.countriesName);
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const fetchingCountry = (name: string) => {
    setLoading(true);

    fetchCountry(name)
      .then(res => {
        const { region, capital, flags, population } = res[0];

        setCountry({
          name,
          region,
          capital,
          flag: flags.svg,
          population
        });
      }).catch(() => {
        setError(true);
      }).finally(() => setLoading(false));
  };

  useEffect(() => {
    if (names.length) {
      onClick();
    }
  }, []);
 
  const onClick = useCallback(() => {
    const name = names[random(names.length - 1)].name.common;

    fetchingCountry(name);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="random">
      <div className="container">
        <div className="random__wrapper">
          {country && !error && (
            <Card country={country} />
          )}

          <button
            className="random__btn"
            onClick={onClick}
          >
            Random
          </button>
        </div>
      </div>
    </section>
  );
};

export default Random;