import React, { FC } from "react";
import styled from "styled-components";

type BeerDetailsProps = { id: any };

const StyledDiv = styled.div``;

export const BeerDetails: FC<BeerDetailsProps> = ({ id }) => (
  <StyledDiv>
    <p>{id}</p>
  </StyledDiv>
);
