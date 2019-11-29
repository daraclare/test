import React from "react";
import Styled from "styled-components";
import { Beer } from "./Beer";

export const Beers = props => {
  console.log("props", props);

  //   const listItems = beers && beers.map(beer => <li>{beer.id}</li>);

  return (
    <>
      {/* {listItems} */}
      <Beer
        title="My Beer Title"
        img="https://accounts.google.com/SignOutOptions?hl=en-GB&continue=https://www.google.com%3Fhl%3Den-GB"
        description="This is my beer description"
      />
      <Beer
        title="My Beer Title"
        img="https://accounts.google.com/SignOutOptions?hl=en-GB&continue=https://www.google.com%3Fhl%3Den-GB"
        description="This is my beer description"
      />
    </>
  );
};
