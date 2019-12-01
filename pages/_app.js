import React from "react";
import App from "next/app";
import Head from "next/head";
import { Nav } from "../components/Nav/Nav";
import styled, { createGlobalStyle } from "styled-components";

const Main = styled.main`
  margin: 0 auto;
  padding: 8px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 16px;
    font-family: Helvetica, sans-serif;
  }
`;

const StyledH1 = styled.h1`
  letter-spacing: 2px;
  text-align: center;
`;

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Main>
        <Head>
          <title>Brewdog Beers</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <GlobalStyle />
        <StyledH1>Brewdog Beers</StyledH1>
        <Nav />
        {children}
      </Main>
    );
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
