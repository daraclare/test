import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { BeerDetails } from "../components/Beers/BeerDetails";
import { getBeers } from "../api";

const StyledSection = styled.section`
  display: grid;
`;

const Details = ({ beer }) => {
  return (
    <StyledSection>
      <BeerDetails beer={beer} />
    </StyledSection>
  );
};

Details.getInitialProps = async (ctx: any) => {
  const { asPath } = ctx;

  const response = await getBeers(asPath);
  const { data } = response;
  console.log("data", data);
  console.log("response getInitial", response);
  return { beer: data };
};

export default Details;
