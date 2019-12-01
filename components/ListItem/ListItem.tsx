import React, { FC } from "react";
import styled from "styled-components";

type ListItemProps = {
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

export const ListItem: FC<ListItemProps> = ({
  text,
  handleChange,
  name,
  spanText,
  isChecked
}) => {
  return (
    <StyledLi data-testid="listItem" isChecked={isChecked}>
      {text}
      <StyledSpan data-testid="listItem-spanText"> {spanText} </StyledSpan>
      <StyledButton
        data-testid="listItem-button"
        id={name}
        onClick={handleChange}
        isChecked={isChecked}
      >
        {isChecked ? "DONE" : "IDLE"}
      </StyledButton>
    </StyledLi>
  );
};
