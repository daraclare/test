import React from "react";
import styled from "styled-components";
import { Beer } from "./Beer";

const StyledArticle = styled.article`
  margin: 10px;
  border: 1px solid lightgrey;
  position: relative;

  &:hover {
    border: 1px solid slategrey;
  }
`;

export const Beers = ({ beers }) => {
  return beers.map((beer: any) => (
    <StyledArticle key={`beer-${beer.id}`}>
      <Beer
        data-testid={`beer=${beer.id}`}
        title={beer.name}
        img={beer.image_url}
        description={beer.description}
        abv={beer.abv}
      />
    </StyledArticle>
  ));
};
