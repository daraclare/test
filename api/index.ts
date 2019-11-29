import axios from "axios";
import { BeerType } from "../types/types";

const BEERAPI = "https://api.punkapi.com/v2/beers";

export const baseHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  platform: "web",
  version: "0"
};

const beerApi = axios.create({
  baseURL: BEERAPI,
  headers: { ...baseHeaders }
});

type ResponseType = {
  data: BeerType[];
};

export const getBeers = async (query = ""): Promise<ResponseType> => {
  const headers = {
    ...baseHeaders
  };

  try {
    const response = await beerApi({
      headers,
      method: "get",
      url: query,
      data: query
    });
    return response;
  } catch (error) {
    return error;
  }
};
