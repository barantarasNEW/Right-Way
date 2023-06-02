import { useCallback, useEffect, useState } from "react";
import random from 'lodash.random';
import './Random.scss';

import { getCountry } from "../../api/getCountry";
import { useAppSelector } from "../../hooks/useRedux";
import { Country } from "../../types/Country";

import { Card } from "../../components/Card/Card";
import Loader from '../../components/Loader/Loader';

const Random = () => {
  const { names } = useAppSelector(state => state.names);
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    onClick();
  }, []);
 
  
  const fetchingCountry = (name: string) => {
    setLoading(true);

    getCountry(name)
      .then(res => setCountry(res))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  };

  const onClick = useCallback(() => {
    const name = names[random(names.length - 1)];

    fetchingCountry(name);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="random">
      <div className="container">
        <div className="random__wrapper">
          {country && (
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