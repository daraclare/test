import React from "react";
import { Beers } from "../components/Beers/Beers";
import { NextPage } from "next";
import styled from "styled-components";
import { getBeers } from "../api/";
import { Error } from "./_error";

interface Props {
  beers: any[];
}

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit);
`;

const Home: NextPage<Props> = ({ beers }) => (
  <StyledSection>{beers ? <Beers beers={beers} /> : <Error />}</StyledSection>
);

Home.getInitialProps = async () => {
  const response = await getBeers("?page=1&per_page=80");
  const { data } = response;
  return { beers: data };
};

export default Home;
