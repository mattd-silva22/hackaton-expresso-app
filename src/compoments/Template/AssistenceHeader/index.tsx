import React from "react";
import styled from "styled-components";
import { useChatbot } from "../../../Providers/ChatbotContext";

const AssistenceHeader: React.FC = () => {
  const { setModalVisible } = useChatbot();
  return (
    <AssistenceHeaderWrapper>
      <img
        src={require("../../../assets/assistance_background1.png")}
        alt="Background"
        className="Background"
      />
      <div className="header-container">
        <div className="title-container">
          <h1>Olá, sou a</h1>
          <h1>
            <strong>Iasmin</strong>
            <img
              className="tchau"
              src={require("../../../assets/tchau.svg").default}
              alt="Olá"
              width={16}
              height={16}
            />
          </h1>
          <button type="button" onClick={() => setModalVisible(true)}>
            <p>Falar com a assistente</p>
          </button>
        </div>

        <img
          src={require("../../../assets/iasmim.png")}
          alt="Rosto da Iasmim"
          className="iasmim"
        />
      </div>
    </AssistenceHeaderWrapper>
  );
};

const AssistenceHeaderWrapper = styled.div`
  width: 100%;
  height: 241px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(.jpg);

  .Background {
    width: 100%;
    height: 241px;
    position: absolute;
    top: 0;

    background-repeat: repeat;
    z-index: -1;
  }

  .header-container {
    flex-direction: row;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1000px;
    padding: 24px;

    .iasmim {
      width: 90px;
      height: 90px;
    }
  }

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    flex: 1;

    h1 {
      color: var(--white);
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 39px;
      letter-spacing: -0.07em;
      width: 60%;
      display: flex;

      .tchau {
        height: 32px;
        width: 32px;
        margin-left: 8px;
      }
    }

    button {
      margin-top: 24px;

      padding: 12px 14.5px;
      backdrop-filter: blur(22.3404px);
      border-radius: 24px;
      border: 0px;
      cursor: pointer;
      background-color: var(--white);

      p {
        text-align: center;
        text-transform: uppercase;
        color: var(--n-900);
        font-weight: bold;
      }
    }
  }
`;

export default AssistenceHeader;
