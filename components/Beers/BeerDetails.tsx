import React, { FC } from "react";
import styled from "styled-components";
import { BeerType } from "../../types/types";

type BeerDetailsProps = { beer: BeerType };

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit);
`;

const StyledImg = styled.img`
  max-height: 70vh;
  margin: 0 auto;
`;

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
      <StyledImg src={image_url} alt={`bottle of ${name}`} />

      <div>
        <h2>
          {name} <span>({tagline})</span>
        </h2>
        <p>ABV: {abv}</p>
        <p>{description}</p>
        <h4>Food Pairings: </h4>
        <ul>
          {food_pairing.map((food: string, index: number) => (
            <li key={index}>{food}</li>
          ))}
        </ul>
      </div>
    </StyledDiv>
  );
};
