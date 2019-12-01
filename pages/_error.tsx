import React, { FC } from "react";
import styled from "styled-components";

type ErrorProps = {};

const StyledDiv = styled.div`
  text-align: center;
`;

export const Error: FC<ErrorProps> = () => (
  <StyledDiv>
    <p>Apologies, an Error has occurred, please try refreshing your browser.</p>
  </StyledDiv>
);
