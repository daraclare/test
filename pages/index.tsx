import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { NextPage } from "next";
import styled, { createGlobalStyle } from "styled-components";

interface Props {
  userAgent?: string;
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

const Home: NextPage<Props> = ({ userAgent }) => (
  <div>
    <Head>
      <title>Next JS App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle />
    <Nav />
    <Main>Your user agent: {userAgent}</Main>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Home;
