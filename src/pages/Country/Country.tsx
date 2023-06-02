import { useEffect, useState } from "react";
import { useParams } from "react-router";
import './Country.scss';

import { getCountry } from "../../api/getCountry";
import { Country as CountryType } from "../../types/Country";

import Loader from "../../components/Loader/Loader";
import { Card } from "../../components/Card/Card";

const Country = () => {
  const [country, setCountry] = useState<CountryType | null>(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

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
          <Card country={country} />
        </div>
      </div>
    </section>
  );
};

export default Country;