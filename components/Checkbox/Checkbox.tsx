import React, { FC } from "react";
import styled from "styled-components";

type CheckboxProps = {
  text: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  spanText?: string;
};

const StyledLabel = styled.label<any>`
  ${({ isChecked }) => isChecked && `text-decoration: line-through;`}
`;
const StyledSpan = styled.span`
  color: grey;
  font-size: 12px;
`;

export const Checkbox: FC<CheckboxProps> = ({
  text,
  handleChange,
  name,
  spanText,
  isChecked
}) => {
  console.log("isChecked", isChecked);
  return (
    <StyledLabel htmlFor={name} isChecked={isChecked}>
      <input
        id={name}
        type="checkbox"
        checked={isChecked || false}
        onChange={handleChange}
      />
      {text}
      <StyledSpan> {spanText}</StyledSpan>
    </StyledLabel>
  );
};
