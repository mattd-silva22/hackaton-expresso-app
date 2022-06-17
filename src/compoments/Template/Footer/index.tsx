import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <Content>
        <nav className="footer-nav">
          <div className="footer-nav-icon">
            <img
              src={require("../../../assets/home_4.svg").default}
              alt="Home"
            />
            <p>Home</p>
          </div>

          <div className="footer-nav-icon">
            <img
              src={require("../../../assets/folder.svg").default}
              alt="Categorias"
            />

            <p>Categorias</p>
          </div>

          <div className="footer-nav-icon">
            <img
              src={require("../../../assets/message_write.svg").default}
              alt="Assistente"
            />

            <p>Assistente</p>
          </div>

          <div className="footer-nav-icon">
            <img
              src={require("../../../assets/user_3.svg").default}
              alt="Assistente"
            />
            <p>Seus dados</p>
          </div>
        </nav>
      </Content>
    </Container>
  );
}

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
