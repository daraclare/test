import React, { FC } from "react";
import styled from "styled-components";

type CheckboxProps = {
  text: string;
  name: string;
  handleChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isChecked: boolean;
  spanText?: string;
};

const StyledLi = styled.li<{ isChecked }>`
  ${({ isChecked }) => isChecked && `text-decoration: line-through;`}
`;

const StyledButton = styled.button<{ isChecked }>`
  ${({ isChecked }) => isChecked && `opacity: .5;`}
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
  return (
    <StyledLi isChecked={isChecked}>
      {text}

      <StyledSpan> {spanText}</StyledSpan>
      <StyledButton id={name} onClick={handleChange} isChecked={isChecked}>
        {isChecked ? "DONE" : "IDLE"}
      </StyledButton>
    </StyledLi>
  );
};
