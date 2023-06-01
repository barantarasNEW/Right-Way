export const fetchCountriesName = () => {
  return fetch(`${process.env.API_URL}/all/?fields=name`)
    .then(res => res.json()); 
};