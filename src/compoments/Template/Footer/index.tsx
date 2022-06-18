import React from "react";
import styled from "styled-components";
import { usePages } from "../../../Providers/PagesContext";

const Footer: React.FC = () => {
  const { Pages, changePage, currentPage } = usePages();

  return (
    <Container>
      <Content>
        <nav className="footer-nav">
          <div
            className="footer-nav-icon"
            onClick={() => changePage(Pages.HOME)}
          >
            {currentPage === Pages.HOME ? (
              <img
                src={require("../../../assets/menu/home_enabled.svg").default}
                alt="Home"
              />
            ) : (
              <img
                src={require("../../../assets/menu/home_disabled.svg").default}
                alt="Home"
              />
            )}
            <p
              style={{
                color: currentPage === Pages.HOME ? "#0B7675" : "#727171",
              }}
            >
              Início
            </p>
          </div>

          <div
            className="footer-nav-icon"
            onClick={() => changePage(Pages.CATEGORIES)}
          >
            {currentPage === Pages.CATEGORIES ? (
              <img
                src={require("../../../assets/menu/folder_enabled.svg").default}
                alt="Categorias"
              />
            ) : (
              <img
                src={
                  require("../../../assets/menu/folder_disabled.svg").default
                }
                alt="Categorias"
              />
            )}

            <p
              style={{
                color: currentPage === Pages.CATEGORIES ? "#0B7675" : "#727171",
              }}
            >
              Categorias
            </p>
          </div>

          <div
            className="footer-nav-icon"
            onClick={() => changePage(Pages.ASSISTENCE)}
          >
            {currentPage === Pages.ASSISTENCE ? (
              <img
                src={
                  require("../../../assets/menu/message_enabled.svg").default
                }
                alt="Categorias"
              />
            ) : (
              <img
                src={
                  require("../../../assets/menu/message_disabled.svg").default
                }
                alt="Categorias"
              />
            )}
            <p
              style={{
                color: currentPage === Pages.ASSISTENCE ? "#f7b518" : "#727171",
              }}
            >
              Busque Ajuda
            </p>
          </div>

          <div
            className="footer-nav-icon"
            onClick={() => changePage(Pages.PROFILE)}
          >
            <img
              src={require("../../../assets/user_3.svg").default}
              alt="Assistente"
            />
            <p
              style={{
                color: currentPage === Pages.PROFILE ? "#0B7675" : "#727171",
              }}
            >
              Seus dados
            </p>
          </div>
        </nav>
      </Content>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  position: fixed;
  bottom: 0;

  padding: 12px;
  background-color: var(--white);
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  width: 90%;
  max-width: 1920px;

  .footer-nav {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    gap: 7rem;

    @media (max-width: 720px) {
      & {
        gap: 2.5rem;
      }
    }
  }

  .footer-nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    font-weight: 700;

    color: #727171;

    text-align: center;

    cursor: pointer;

    p {
      white-space: nowrap;

      @media (max-width: 720px) {
        & {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
