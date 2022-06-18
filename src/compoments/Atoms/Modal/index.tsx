import { transparentize } from "polished";
import React from "react";
import styled, { css } from "styled-components";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  onClose,
  show,
  children,
}) => {
  return (
    <ModalBody show={show} data-testid="modal-container">
      {/* <div
        className="close-button"
        onClick={() => onClose()}
        data-testid="modal-button"
      >
        <div className="menu-bars up" />
        <div className="menu-bars down" />
      </div> */}
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

  /* .close-button {
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 4px;

    transition: all 0.4s ease-in-out;

    background-color: var(--white);

    .menu-bars {
      width: 35px;
      height: 5px;
      background-color: ${(props) => "#000"};
      border-radius: 5px;
      transition: all 0.4s ease-in-out;
    }

    .down {
      position: fixed;
    }

    ${(props) =>
    !props.show &&
    css`
      transform: translateX(480px);
      visibility: hidden;
    `};

    ${(props) =>
    props.show &&
    css`
      visibility: visible;

      .up {
        width: 35px;
        transform: rotate(45deg);
      }

      .down {
        width: 35px;
        transform: rotate(-45deg);
      }
    `};
  } */

  .modal-container {
    position: absolute;
    height: 100%;
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
