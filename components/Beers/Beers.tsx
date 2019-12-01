import React from "react";
import styled from "styled-components";
import { Beer } from "./Beer";

const StyledArticle = styled.article`
  margin: 10px;
  border: 1px solid lightgrey;
  border-radius: 16px;
  position: relative;
  &:hover {
    border: 1px solid darkslategrey;
  }
`;

export const Beers = ({ beers }) => {
  return beers.map((beer: any) => {
    const { abv, description, id, name, image_url } = beer;
    return (
      <StyledArticle data-testid="beer" key={`beer-${id}`}>
        <Beer
          data-testid={`beer-${id}`}
          name={name}
          img={image_url}
          description={description}
          abv={abv}
          id={id}
        />
      </StyledArticle>
    );
  });
};
