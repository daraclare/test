import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledSection = styled.section`
  display: grid;
`;

const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  return <StyledSection>Beer: {id}</StyledSection>;
};

export default Details;
