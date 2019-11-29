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
`;

const Nav = () => (
  <StyledNav>
    <StyledUl>
      <StyledLi>
        <Link href="/">
          <StyledA>Home</StyledA>
        </Link>
      </StyledLi>
      <StyledLi>
        <Link href="/about">
          <StyledA>About</StyledA>
        </Link>
      </StyledLi>
      <StyledLi>
        <Link href="/contact">
          <StyledA>Contact</StyledA>
        </Link>
      </StyledLi>
    </StyledUl>
  </StyledNav>
);

export default Nav;
