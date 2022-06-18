import React from "react";
import styled from "styled-components";

interface IChatbotHeader {
  onBack: () => void;
}

const ChatbotHeader: React.FC<IChatbotHeader> = ({ onBack }) => {
  return (
    <ChatbotHeaderWrapper>
      <div className="container">
        <img
          className="back-button"
          src={require("../../../assets/back.svg").default}
          alt="Voltar"
          onClick={() => onBack()}
        />

        <img className="picture" src="" alt="Foto de perfil" />

        <div className="name">
          <h1>Assistente Expresso</h1>
          <small>Online</small>
        </div>
      </div>
    </ChatbotHeaderWrapper>
  );
};

const ChatbotHeaderWrapper = styled.div`
  padding: 14px 24px;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);

  .container {
    display: flex;
    flex-direction: row;

    .back-button {
      cursor: pointer;
      padding: 8px;
    }

    .picture {
      border-radius: 50%;

      height: 50px;
      width: 50px;
    }

    .name {
      flex: 2;
      margin-left: 12px;

      h1 {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: -0.04em;
      }

      small {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.04em;
        color: rgba(176, 174, 174, 0.6);
      }
    }
  }
`;

export default ChatbotHeader;
