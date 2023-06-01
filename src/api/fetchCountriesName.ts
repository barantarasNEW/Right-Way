const API = "https://restcountries.com/v3.1/all";

export const fetchCountriesName = () => {
  return fetch(`${API}?fields=name`)
    .then(res => res.json()); 
};