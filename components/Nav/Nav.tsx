import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  text-align: center;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 4px 16px;
`;

const StyledLi = styled.li`
  display: flex;
  padding: 6px 8px;
`;

const StyledA = styled.a`
  color: #067df7;
  text-decoration: none;
  font-size: 13px;
  cursor: pointer;
`;

export const Nav = () => (
  <StyledNav>
    <StyledUl>
      <StyledLi>
        <Link href="/">
          <StyledA>Home</StyledA>
        </Link>
      </StyledLi>
      <StyledLi>
        <StyledA href="https://github.com/daraclare/test/blob/master/README.md">
          ReadMe
        </StyledA>
      </StyledLi>
      <StyledLi>
        <StyledA href="https://github.com/daraclare/test">GitHub</StyledA>
      </StyledLi>
    </StyledUl>
  </StyledNav>
);
