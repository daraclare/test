import React, { FC } from "react";
import styled from "styled-components";
import { BeerType } from "../../types/types";

type BeerDetailsProps = { beer: BeerType };

const StyledDiv = styled.div``;

export const BeerDetails: FC<BeerDetailsProps> = ({ beer }) => {
  console.log("beer", beer);
  const {
    abv,
    description,
    food_pairing,
    id,
    image_url,
    ingredients: { hops, malt, yeast },
    method: { fermentation, mash_temp },
    name,
    tagline
  } = beer;
  return (
    <StyledDiv>
      <h2>
        {name} <span>({tagline})</span>
      </h2>
      <p>{abv}</p>
      <p>{description}</p>
      <h4>Food Pairings: </h4>
      {food_pairing.map((food: string, index: number) => (
        <p key={index}>{food}</p>
      ))}
      <img src={image_url} alt={`bottle of ${name}`} />
    </StyledDiv>
  );
};
