import React from "react";
import Styled from "styled-components";

export const Beer = ({ title, img, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <img src={img} alt={`beer label`} />
      <p>{description}</p>
    </>
  );
};
