export const FIELDS = "name,capital,population,region,flags,independent,currencies,languages,maps";

const wait = (time: number) => {
  return new Promise(resolve => setTimeout(resolve, time));
};

export const getCountry = (name: string) => {
  return wait(300)
    .then(() => fetch(`${process.env.API_URL}/name/${name}?fields=${FIELDS}`))
    .then(res => res.json())
    .then(res => ({
      ...res[0],
      name: res[0].name.common,
      flag: res[0].flags.png,
      currencies: Object.values(res[0].currencies),
      languages: Object.values(res[0].languages),
      map: res[0].maps.googleMaps,
    }));
};