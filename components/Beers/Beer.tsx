import React from "react";
import styled from "styled-components";
import Link from "next/link";

const BeerWrapper = styled.div`
  padding: 16px;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const StyledImg = styled.img`
  padding: 20px 20px 0 0px;
`;

const StyledP = styled.p`
  overflow: scroll;
  text-overflow: ellipsis;
`;

const StyledH4 = styled.h4`
  position: absolute;
  margin: 5px;
  bottom: 0;
  right: 10px;
`;

const StyledA = styled.a`
  color: unset;
  text-decoration: none;
`;

export const Beer = ({ id, title, img, description, abv }) => {
  return (
    <BeerWrapper>
      <Link href={`/${id}`}>
        <StyledA>
          <h2>{title}</h2>
          <StyledDiv>
            <StyledImg src={img} alt={`beer label`} height="100px" />
            <StyledP>{description}</StyledP>
          </StyledDiv>
          <StyledH4>ABV: {abv}</StyledH4>
        </StyledA>
      </Link>
    </BeerWrapper>
  );
};
