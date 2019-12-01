import React, { FC } from "react";
import styled from "styled-components";
import { BeerType } from "../../types/types";
import { Checkbox } from "../Checkbox/Checkbox";

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

const StyledSpan = styled.span`
  color: grey;
  font-size: 0.8rem;
`;

export const BeerDetails: FC<BeerDetailsProps> = ({ beer }) => {
  const {
    abv,
    description,
    image_url,
    ingredients: { hops, malt, yeast },
    method: { fermentation, mash_temp, twist },
    name,
    tagline
  } = beer;
  const [checkedList, setChecked] = React.useState({});
  const handleChange = (event: any) => {
    setChecked({
      ...checkedList,
      [event.target.id]: !checkedList[event.target.id]
    });
  };
  return (
    <StyledDiv>
      <StyledImg src={image_url} alt={`bottle of ${name}`} />
      <div>
        <h2>
          {name} <span>({tagline})</span>
        </h2>
        <p>ABV: {abv}</p>
        <p>{description}</p>
        <h3>Ingredients</h3>
        <h4>Hops: </h4>
        {hops.map((hopItem: any, index: number) => {
          return (
            <div key={index}>
              <Checkbox
                name={`${hopItem.name}-${hopItem.add}`}
                spanText={hopItem.amount.value + hopItem.amount.unit}
                text={hopItem.name}
                handleChange={handleChange}
                isChecked={checkedList[`${hopItem.name}-${hopItem.add}`]}
              />
            </div>
          );
        })}

        <h4>Malt: </h4>
        {malt.map((maltItem: any, index: number) => {
          return (
            <div key={index}>
              <Checkbox
                name={`${maltItem.name}-${maltItem.add}`}
                spanText={maltItem.amount.value + maltItem.amount.unit}
                text={maltItem.name}
                handleChange={handleChange}
                isChecked={checkedList[`${maltItem.name}-${maltItem.add}`]}
              />
            </div>
          );
        })}

        <h4>Yeast: </h4>
        <p>{yeast}</p>

        <h3>Methods</h3>
        <h4>
          Fermentation: {fermentation.temp.value}
          {fermentation.temp.unit}
        </h4>
        <h4>
          Mash Temp:{" "}
          {mash_temp.map((mash, index) => {
            return (
              <div key={index}>
                <p>{mash.duration}</p>
                <p>
                  {mash.temp.value}
                  {mash.temp.unit}
                </p>
              </div>
            );
          })}
        </h4>
        <h4>Twist?: {twist ? "Yes" : "No"}</h4>
      </div>
    </StyledDiv>
  );
};
