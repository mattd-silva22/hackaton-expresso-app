import React from "react";
import styled, { css } from "styled-components";

export interface ICategoryTag {
  title: string;
  enabled?: boolean;
  size: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
}

const CategoryTag: React.FC<ICategoryTag> = ({
  enabled = false,
  title,
  size,
  disabled = false,
  onClick,
}) => {
  return (
    <CategoryTagWrapper
      enabled={enabled}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      <p>{title}</p>
    </CategoryTagWrapper>
  );
};

interface ICategoryTagWrapper
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  enabled: boolean;
  size: "small" | "medium" | "large";
  disabled: boolean;
}

const CategoryTagWrapper = styled.button<ICategoryTagWrapper>`
  padding: 0.8rem;
  border: 1px solid var(--neuter);
  border-radius: 24px;
  margin-right: 8px;
  background-color: var(--white);

  ${(props) =>
    props.size === "small" &&
    css`
      padding: 0.4rem;
      p {
        font-size: 11px;
      }
    `};

  ${(props) =>
    props.size === "medium" &&
    css`
      p {
        font-size: 14px;
      }
    `};

  ${(props) =>
    props.size === "large" &&
    css`
      padding: 1.2rem;
      p {
        font-size: 16px;
      }
    `};

  p {
    color: #363434;
    font-weight: bold;
    white-space: nowrap;
  }

  ${(props) =>
    !props.disabled &&
    css`
      cursor: pointer;

      &:hover {
        background: var(--background-gradient);
        border-color: var(--primary);
        border: 0;
        padding: 0.9rem;

        p {
          color: var(--white);
        }
      }
    `}

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

export default CategoryTag;
