import React from "react";
import styled from "styled-components";
import CardButton from "../../compoments/Atoms/CardButton";
import AssistanceCard from "../../compoments/Molecules/AssistanceCard";
import AssistanceTemplate from "../../compoments/Template/AssistanceTemplate";
import ChatbotPage from "../ChatbotPage";

const AssistencePage: React.FC = () => {
  return (
    <>
      <AssistanceTemplate>
        <ContainerWrapper>
          <AssistanceCard title="Novas funcionalidades">
            <CardButton
              icon="whatsapp"
              iconName="WhatsApp"
              text="Caso deseje, converse com a Assistente pelo <strong>Whatsapp</strong>"
              strongColor="#6CE4B9"
            />
            <CardButton
              icon="telegram"
              iconName="Telegram"
              text="Caso deseje, converse com a Assistente pelo <strong>Telegram</strong>"
              strongColor="#64ACEF"
            />
          </AssistanceCard>
          <AssistanceCard title="Busque ajuda"></AssistanceCard>
        </ContainerWrapper>
      </AssistanceTemplate>
      <ChatbotPage />
    </>
  );
};

const ContainerWrapper = styled.div`
  position: relative;
  top: -24px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export default AssistencePage;
