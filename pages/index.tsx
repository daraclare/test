import React from "react";
import Head from "next/head";
import Nav from "../components/Nav/Nav";
import { Beers } from "../components/Beers/Beers";
import { NextPage } from "next";
import styled, { createGlobalStyle } from "styled-components";
import { getBeers } from "../api/";

interface Props {
  userAgent?: string;
  data: any[];
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

const Home: NextPage<Props> = ({ beers, userAgent }) => (
  <div>
    {console.log("data props", beers)}
    <Head>
      <title>Next JS App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle />
    <Nav />
    <Main>Your user agent: {userAgent}</Main>
    <Beers beers={beers} />
  </div>
);

Home.getInitialProps = async () => {
  const response = await getBeers();
  const { data, status } = response;
  console.log("data", data);
  return { beers: { ...data }, status };
};

export default Home;
