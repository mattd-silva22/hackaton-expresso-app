import React from "react";
import Modal from "../../compoments/Atoms/Modal";
import { ServicesModel } from "../../models/services.model";
import { useChatbot } from "../../Providers/ChatbotContext";
import { usePages } from "../../Providers/PagesContext";
import { useService } from "../../Providers/ServiceContext";
import { ServicePageWrapper } from "./styles";

interface IServicePage {
  show: boolean;
  service?: ServicesModel;
  onBack: () => void;
}

const ServicePage: React.FC<IServicePage> = ({ show, service, onBack }) => {
  const { changePage, Pages } = usePages();
  const { setModalVisible } = useChatbot();
  const { setCurrentService } = useService();
  return (
    <Modal show={show}>
      {!!service && (
        <ServicePageWrapper>
          <div className="head">
            <img
              onClick={() => onBack()}
              className="voltar"
              alt="Voltar"
              src={require("../../assets/voltar.svg").default}
            />
            <img
              alt={service.title}
              src={require("../../assets/services/document.svg").default}
              height={56}
            />
            <h1>{service.title}</h1>
            <div className="button-container">
              <button
                type="button"
                className="ias-button"
                onClick={() => {
                  setCurrentService(undefined);
                  changePage(Pages.ASSISTENCE);
                  setModalVisible(true);
                }}
              >
                Pedir ajuda da IAS
              </button>
              <button type="button" className="service-button">
                Acessar Serviço
              </button>
            </div>
          </div>
          <div className="body">
            <img
              src={require("../../assets/processive-steps.svg").default}
              alt="Barra de progresso - Passo 1"
            />
            <h1>Agendamento eletrônico</h1>
            <ul>
              <li>
                O Agendamento de Carteira de Identidade será realizado através
                da plataforma digital: www.vaptvupt.go.gov.br/agendamento
              </li>
              <li>
                O agendamento será possível para 1ª VIA e para as 2ª VIA que
                possuam cadastro no sistema Goiás Biométrico.
              </li>
              <li>
                Em alguns casos de 2ª VIA, o requerente será notificado à
                comparecer a uma unidade de atendimento.
              </li>
              <li>
                O requerente deverá preencher um pré-cadastro através do site
                citado acima, e após, agendar local e horário conforme sua
                disponibilidade.
              </li>
              <li>Importante anotar o número de protocolo.</li>
              <li>
                Os itens na cor amarela deverão ser preenchidos
                obrigatoriamente.
              </li>
              <li>
                Caso o requerente não possua e-mail, deverá criar um e-mail
                antes de realizar o agendamento, pois é um ítem de preenchimento
                obrigatório, uma vez que as informações do agendamento serão
                enviadas para o e-mail cadastrado.
              </li>
            </ul>
          </div>
        </ServicePageWrapper>
      )}
    </Modal>
  );
};

export default ServicePage;
