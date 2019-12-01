export type BeerType = {
  id: number;
  description: string;
  name: string;
  image_url: string;
  abv: number;
  ingredients: any;
  food_pairing: string[];
  tagline: string;
  method: { fermentation: any; mash_temp: any[]; twist: any };
};
