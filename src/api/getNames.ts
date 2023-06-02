export const getNames = () => {
  return fetch(`${process.env.API_URL}/all/?fields=name`)
    .then(res => res.json())
    .then(res => res.map((name: any) => name.name.common));
};