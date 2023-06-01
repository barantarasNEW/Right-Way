const wait = (time: number) => {
  return new Promise(resolve => setTimeout(resolve, time));
};

export const fetchCountry = (name: string, fields: string): Promise<any[]> => {
  return wait(300)
    .then(() => fetch(`${process.env.API_URL}/name/${name}?fields=${fields}`))
    .then(res => res.json());
};