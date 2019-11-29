import axios from "axios";

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
  data: any;
  status: any;
};

export const getBeers = async (query = {}): Promise<ResponseType> => {
  const headers = {
    ...baseHeaders
  };
  try {
    const response = await beerApi({
      headers,
      method: "get",
      url: "?page=2&per_page=80",
      data: query
    });
    console.log("response", response);
    const { data } = response;
    return { data, status };
  } catch (error) {
    return error;
  }
};
