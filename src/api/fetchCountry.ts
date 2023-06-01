import { wait } from "../helpers/wait";

const API = "https://restcountries.com/v3.1/name/";
const FIELDS = "name,capital,population,region,flags";

export const fetchCountry = (name: string): Promise<any[]> => {
  return wait(300)
    .then(() => fetch(`${API}${name}?fields=${FIELDS}`))
    .then(res => res.json());
};