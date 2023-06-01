import { useEffect, useState } from "react";
import './Quiz.scss';
import { useAppSelector } from "../../hooks/useRedux";
import random from "lodash.random";
import { fetchCountry } from "../../api/fetchCountry";
import { Country } from "../../types/Country";
import Loader from "../../components/Loader/Loader";

const Quiz = () => {
  const { names } = useAppSelector(state => state.countriesName);
  const [countries, setCountries] = useState<Country[]>([]);
  const [mainName, SetMainName] = useState('');
  const [loading, setLoading] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isInCorrect, setIsIncorrect] = useState(false);

  const fetchingQuizCountry = async () => {
    setLoading(true);

    const resultName = [];

    for (let i = 0; i < 4; i++) {
      resultName.push(names[random(names.length)].name.common);
    }

    const result = resultName.map(country => fetchCountry(country));
    const response = await Promise.all(result);
    const data: Country[] = [];

    response.forEach(value => data.push(value[0]));

    setCountries(data);
    SetMainName(resultName[random(3)]);
    setLoading(false);
  };

  useEffect(() => {
    fetchingQuizCountry();
  }, []);

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
        .filter((country: any) => country.name.common !== value));
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="quiz">
      <div className="container">
        <h2 className="quiz__title">{mainName}</h2>
        
        <ul className="quiz__list">
          {countries.map((country: any) => (
            <li key={country.name.common} className="quiz__item">
              <button
                className="quiz__btn"
                onClick={() => onClick(country.name.common)}
                disabled={isCorrect || isInCorrect}
              >
                <img
                  className="quiz__flag"
                  src={country.flags.svg}
                  alt="icon"
                />
              </button>
            </li>
          ))}
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