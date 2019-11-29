import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { BeerDetails } from "../components/Beers/BeerDetails";

const StyledSection = styled.section`
  display: grid;
`;

const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <StyledSection>
      <BeerDetails id={id} />
    </StyledSection>
  );
};

export default Details;
