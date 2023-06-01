import { useEffect, useState } from "react";
import './Top.scss';
import { Country } from "../../types/Country";
import { topCountries } from "./constants";
import { fetchCountry } from "../../api/getCountry";
import Loader from "../../components/Loader/Loader";
import { Card } from "../../components/Card/Card";

const FIELDS = "name,capital,population,region,flags";

const Top = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchingCountry = async () => {
    const result = topCountries.map(country => fetchCountry(country, FIELDS));
    const response = await Promise.all(result);

    setCountries(response.flat());
    setLoading(false);
  };

  useEffect(() => {
    fetchingCountry();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="top">
      <div className="container">
        <div className="top__wrapper">
          <ul className="top__list">
            {countries.map((country: any) => (
              <li key={country.name.common} className="top__item">
                <Card country={{
                  ...country,
                  name: country.name.common,
                  flag: country.flags.svg
                }}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Top;