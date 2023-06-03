import { useEffect, useState } from "react";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import random from "lodash.random";
import './Quiz.scss';

import { getCountry } from "../../api/getCountry";
import { useAppSelector } from "../../hooks/useRedux";
import { Country } from "../../types/Country";

import Loader from "../../components/Loader/Loader";

const Quiz = () => {
  const { names } = useAppSelector(state => state.names);

  const [countries, setCountries] = useState<Country[]>([]);
  const [mainName, SetMainName] = useState('');
  const [loading, setLoading] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isInCorrect, setIsIncorrect] = useState(false);

  useEffect(() => {
    fetchingQuizCountry();
  }, []);

  const fetchingQuizCountry = async () => {
    setIsCorrect(false);
    setLoading(true);

    const countriesName = [];

    for (let i = 0; i < 4; i++) {
      countriesName.push(names[random(names.length)]);
    }

    const result = countriesName.map(country => getCountry(country));
    const response = await Promise.all(result);

    setCountries(response.flat());
    SetMainName(countriesName[random(3)]);
    setLoading(false);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isInCorrect) {
      timeout = setTimeout(() => setIsIncorrect(false), 1000);
    }

    if (isCorrect) {
      setIsIncorrect(false);

      timeout = setTimeout(() => {
        setIsCorrect(false);
        
        fetchingQuizCountry();
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [isInCorrect, isCorrect]);

  const onClick = (value: string) => {
    if (mainName === value) {
      setIsCorrect(true);
    } else {
      setIsIncorrect(true);

      setCountries(currCountries => currCountries
        .filter(country => country.name !== value));
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="quiz">
      <div className="container">
        <h2 className="quiz__title">{mainName}</h2>
        
        <ul>
          <TransitionGroup className="quiz__list">
            {countries.map(country => (
              <CSSTransition
                key={country.name}
                timeout={500}
                classNames="item"
              >
                <li className="quiz__item">
                  <button
                    className="quiz__btn"
                    onClick={() => onClick(country.name)}
                    disabled={isCorrect || isInCorrect}
                  >
                    <img
                      className="quiz__flag"
                      src={country.flag}
                      alt="icon"
                    />
                  </button>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>

        {isCorrect && (
          <div className="quiz__correct">Correct!</div>
        )}

        {isInCorrect && (
          <div className="quiz__in-correct">Incorrect!</div>
        )}
      </div>
    </section>
  );
};

export default Quiz;