import { useCallback, useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Country } from "../../types/Country";

const API_KEY = "HOBScV0zlw9LgeWNnRVGWPDPzut7iW0CAvfCoKcs";

const Random = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch(`https://countryapi.io/api/all?apikey=${API_KEY}`)
      .then(res => res.json())
      .then(res => setCountries(res));
  }, []);

  const onClickRandom = useCallback(() => {
    // const random = Math.floor(Math.random() * countries.length);

    console.log(countries);
  }, [countries]);

  return (
    <section className="random">
      <div className="container">
        <Card country={{ name: 'fd', region: 'f', capital: 'g', flag: '', population: 234 }} onClick={onClickRandom} />
      </div>
    </section>
  );
};

export default Random;