export type BeerType = {
  id: number;
  description: string;
  title: string;
  name: string;
  image_url: string;
  abv: string;
  ingredients: any;
  food_pairing: string[];
  tagline: string;
  method: { fermentation: any; mash_temp: any[] };
};
