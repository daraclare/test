import React from "react";
import { Beers } from "../components/Beers/Beers";
import { NextPage } from "next";
import styled from "styled-components";
import { getBeers } from "../api/";

interface Props {
  beers: any[];
}

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit);
`;

const Home: NextPage<Props> = ({ beers }) => (
  <StyledSection>
    <Beers beers={beers} />
  </StyledSection>
);

Home.getInitialProps = async () => {
  const response = await getBeers("?page=1&per_page=80");
  const { data } = response;
  return { beers: data };
};

export default Home;
