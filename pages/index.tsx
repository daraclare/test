import React from "react";
import Head from "next/head";
import Nav from "../components/Nav/Nav";
import { Beers } from "../components/Beers/Beers";
import { NextPage } from "next";
import styled, { createGlobalStyle } from "styled-components";
import { getBeers } from "../api/";

interface Props {
  beers: any[];
}

const Main = styled.main`
  background: lightblue;
  margin: 0 auto;
  padding: 20px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Helvetica, sans-serif;
  }
`;

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit);
`;

const StyledH1 = styled.h1`
  text-align: center;
  letter-spacing: 2px;
`;

const Home: NextPage<Props> = ({ beers }) => (
  <div>
    <Head>
      <title>Next JS App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle />
    <Nav />
    <StyledH1>Brewdog Beers</StyledH1>
    <StyledSection>
      <Beers beers={beers} />
    </StyledSection>
  </div>
);

Home.getInitialProps = async () => {
  const response = await getBeers();
  const { data } = response;
  return { beers: data };
};

export default Home;
