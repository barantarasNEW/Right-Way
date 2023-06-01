import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import './Country.scss';
import { Country as CountryType } from "../../types/Country";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router";
import { fetchCountry } from "../../api/getCountry";

const FIELDS = "name,capital,population,region,flags";

const Country = () => {
  const [country, setCountry] = useState<CountryType | null>(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setLoading(true);

      fetchCountry(id, FIELDS)
        .then((res: any) => {
          setCountry({ ...res[0], name: res[0].name.common, flag: res[0].flags.svg });
        }).finally(() => setLoading(false));
    }
  }, [id]);

  if (!country || loading) {
    return <Loader />;
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