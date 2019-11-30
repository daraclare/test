import React, { FC } from "react";
import styled from "styled-components";

type CheckboxProps = {
  text: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkedList: any;
  spanText?: string;
};

const StyledLabel = styled.label<{ checked }>`
  ${checked => !checked && `text-decoration: line-through;`}
`;
const StyledSpan = styled.span`
  color: grey;
  font-size: 12px;
`;

export const Checkbox: FC<CheckboxProps> = ({
  text,
  handleChange,
  name,
  checkedList,
  spanText
}) => {
  console.log("checkedList", checkedList);
  console.log("name", name);
  return (
    <StyledLabel checked={checkedList[name]}>
      <input
        id={name}
        type="checkbox"
        checked={checkedList[name]}
        onChange={handleChange}
      />
      {text}
      <StyledSpan> {spanText}</StyledSpan>
    </StyledLabel>
  );
};
