import React from "react";
import styled from "styled-components";
import { ServicesModel } from "../../../models/services.model";
import ServicesCard from "../../Molecules/ServicesCard";

interface IServicesCardList {
  services: ServicesModel[];
}

const ServicesCardList: React.FC<IServicesCardList> = ({ services }) => {
  return (
    <ServicesCardListWrapper>
      {services.map((service) => (
        <ServicesCard key={service.id} service={service} />
      ))}
    </ServicesCardListWrapper>
  );
};

const ServicesCardListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px;

  column-gap: 8px;
`;

export default ServicesCardList;
