import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import { Header } from "../Header";

// import { Container } from './styles';

const HomeTemplate: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 72px;
`;

export default HomeTemplate;
