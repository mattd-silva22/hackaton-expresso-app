import { transparentize } from "polished";
import React from "react";
import styled, { css } from "styled-components";

interface ModalProps {
  show: boolean;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  show,
  children,
}) => {
  return (
    <ModalBody show={show} data-testid="modal-container">
      <div className="modal-container" data-testid="modal">
        {children}
      </div>
    </ModalBody>
  );
};

interface ModalBodyProps {
  show: boolean;
}

const ModalBody = styled.div<ModalBodyProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  overflow: scroll;

  transition: background-color 0.4s, visibility 0.4s;

  ${(props) =>
    !props.show &&
    css`
      background-color: ${(props) => transparentize(1, "#000")};

      visibility: hidden;
    `};

  ${(props) =>
    props.show &&
    css`
      background-color: ${(props) => transparentize(0.8, "#000")};
      visibility: visible;
    `};

  .modal-container {
    position: absolute;
    width: 100%;
    min-height: calc(100% + 60px);
    padding-bottom: 120px;
    max-width: 100vw;
    right: 0;
    background-color: var(--white);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    transition: transform 0.4s, opacity 0.4s;

    ${(props) =>
      !props.show &&
      css`
        transform: translateX(480px);
        opacity: 0;
      `};

    ${(props) =>
      props.show &&
      css`
        opacity: 1;
      `};
  }
`;

export default React.memo(Modal);
