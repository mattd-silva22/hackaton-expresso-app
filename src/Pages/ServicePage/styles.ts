import styled from "styled-components";

export const ServicePageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;

    background: rgba(120, 120, 120, 0.1);

    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    position: relative;

    .voltar {
      position: absolute;
      top: 24px;
      left: 24px;
      cursor: pointer;
    }

    h1 {
      color: #727171;
      font-size: 32px;
      text-align: center;
      margin: 24px 0;
    }

    .button-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 400px;
      flex-wrap: wrap;

      button {
        border: 0;
        padding: 8px 20px;
        font-size: 14px;
        color: var(--white);
        border-radius: 24px;
        font-weight: 700;
        cursor: pointer;
      }

      .ias-button {
        background-color: #000;
        border: 1px solid var(--secondary);
        margin-right: 8px;
      }

      .service-button {
        background: linear-gradient(124.21deg, #a7ae90 0%, #6ce4b9 97.06%);
      }
    }
  }

  .body {
    background: var(--white);
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
    border-radius: 24px;
    padding: 24px 32px;
    margin: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-weight: 700;
      font-size: 20.1204px;
      line-height: 24px;
      display: flex;
      align-items: center;
      color: #727171;
      text-align: center;
      margin: 24px 0;
    }

    ul {
      list-style: disc;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-items: center;
      justify-content: center;
    }

    li {
      font-weight: 700;
      font-size: 14px;
      line-height: 15px;
      color: #727171;
      text-align: left;
      overflow-wrap: break-word;
    }

    li + li {
      margin-top: 16px;
    }
  }
`;
