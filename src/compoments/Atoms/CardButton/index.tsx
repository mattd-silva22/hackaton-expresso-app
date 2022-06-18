import React from "react";
import styled from "styled-components";

interface ICardButton {
  text: string;
  icon: string;
  iconName: string;
  strongColor?: string;
}

const CardButton: React.FC<ICardButton> = ({
  icon,
  iconName,
  text,
  strongColor,
}) => {
  return (
    <CardButtonWrapper strongColor={strongColor}>
      <p dangerouslySetInnerHTML={{ __html: text }} />
      <img src={require(`../../../assets/${icon}.svg`)} alt={iconName} />
    </CardButtonWrapper>
  );
};

interface ICardButtonWrapper {
  strongColor?: string;
}

const CardButtonWrapper = styled.button<ICardButtonWrapper>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  border: 0px;
  border-radius: 24px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);

  padding: 8px 12px;
  background-color: var(--white);

  & + & {
    margin-top: 12px;
  }

  p {
    font-size: 12px;
    width: 90%;
    text-align: start;

    strong {
      color: ${(props) => props.strongColor || "#000"};
    }
  }
`;

export default CardButton;
