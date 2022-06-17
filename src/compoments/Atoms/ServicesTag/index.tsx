import React from "react";
import styled, { css } from "styled-components";
import Bubble from "../../../animations/Bubble/Bubble";
import bubbleUp from "../../../animations/Bubble/Bubble-up";

// import { Container } from './styles';

export interface IServicesTag {
  title: string;
  enabled: boolean;
  size: "small" | "medium" | "large";
}

const ServicesTag: React.FC<IServicesTag> = ({ enabled, title, size }) => {
  return (
    <ServicesTagWrapper enabled={enabled} size={size}>
      <p>{title}</p>
    </ServicesTagWrapper>
  );
};

interface IServicesTagWrapper
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  enabled: boolean;
  size: "small" | "medium" | "large";
}

const ServicesTagWrapper = styled.button<IServicesTagWrapper>`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--neuter);
  border-radius: 24px;
  cursor: pointer;
  margin-right: 8px;

  p {
    color: #363434;
    font-weight: bold;

    ${(props) =>
      props.size === "small" &&
      css`
        font-size: 11px;
      `};

    ${(props) =>
      props.size === "medium" &&
      css`
        font-size: 14px;
      `};

    ${(props) =>
      props.size === "large" &&
      css`
        font-size: 16px;
      `};
  }

  &:hover {
    background: var(--background-gradient);
    border-color: transparent;

    p {
      color: var(--white);
    }
  }

  ${(props) =>
    props.enabled &&
    css`
      background: var(--background-gradient);
      border-color: transparent;

      p {
        color: var(--white);
      }
    `};
`;

export default ServicesTag;
