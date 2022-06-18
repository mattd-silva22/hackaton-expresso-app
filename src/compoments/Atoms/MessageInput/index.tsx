import React, { useState } from "react";
import styled from "styled-components";

interface IMessageInput {
  sendMessage: (msg: string) => void;
}

const MessageInput: React.FC<IMessageInput> = ({ sendMessage }) => {
  const [message, setMessage] = useState<string>("");
  function onSubmit(boolean?: boolean) {
    if (!!message && boolean) {
      sendMessage(message);
      setMessage("");
    }
  }

  return (
    <MessageInputWrapper>
      <button>
        <img
          src={require("../../../assets/add.svg").default}
          alt="Adicionar arquivos"
        />
      </button>

      <input
        placeholder="Escreva aqui..."
        value={message}
        onChange={(e: any) => {
          setMessage(e.currentTarget.value as string);
        }}
        onKeyUp={(e) => {
          onSubmit(e.key === "Enter");
        }}
      />

      <button type="button" onClick={() => onSubmit(true)}>
        <img
          src={require("../../../assets/send.svg").default}
          alt="Adicionar arquivos"
        />
      </button>
    </MessageInputWrapper>
  );
};

const MessageInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--white);
  border-radius: 16px;
  border: 0;

  position: fixed;
  bottom: 55px;
  box-shadow: 1px 2px 13px rgba(0, 0, 0, 0.25);
  height: 52px;
  width: calc(100% - 48px);
  margin: 0 24px;

  input {
    flex: 2;
    padding: 8px;
    margin: 8px 0;
    border: 0;
    border-left: 1.5px solid #e9dddd;
    font-size: 14px;

    &:active {
      border: 0;
      border-left: 1.5px solid #e9dddd;
    }
  }

  button {
    background-color: transparent;
    width: 52px;
    height: 52px;
    border: 0;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 13;
    width: 13;
  }
`;

export default MessageInput;
