import { countryFields } from "../constants/constants";

const wait = (time: number) => {
  return new Promise(resolve => setTimeout(resolve, time));
};

export const getCountry = (
  name: string,
  fields: string = countryFields
) => {
  return wait(300)
    .then(() => fetch(`${process.env.API_URL}/name/${name}?fields=${fields}`))
    .then(res => res.json())
    .then(res => ({
      ...res[0],
      name: res[0].name.common,
      flag: res[0].flags.png
    }));
};