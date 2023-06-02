export interface Country {
  name: string;
  region: string;
  capital: string;
  flag: string;
  population: number;
  independent: boolean;
  currencies: { name: string }[];
  languages: { name: string }[];
  map: string;
}