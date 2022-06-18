import { Container, Content } from "./styles";

export function Header() {
  return (
    <>
      <Container>
        <Content>
          <div className="logo-area">
            <img
              src={require("../../../assets/logo.svg").default}
              alt="Logo da empresa Express"
            />
          </div>
        </Content>
      </Container>
    </>
  );
}
