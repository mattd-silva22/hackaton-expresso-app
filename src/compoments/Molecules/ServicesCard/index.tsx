import React from "react";
import styled from "styled-components";
import ServicesTag from "../../Atoms/ServicesTag";
import { ICategories } from "../FilterRow";

// import { Container } from './styles';

interface ServicesModel {
  id: string;
  icon: string;
  status: boolean;
  title: string;
  subTitle: string;
  categoryId: string;
  category: ICategories;
}

interface IServicesCard {
  service: ServicesModel;
}

const ServicesCard: React.FC<IServicesCard> = ({ service }) => {
  return (
    <ServicesCardWrapper>
      <div className="icon-container">
        <img alt={service.title} src={service.icon} />
      </div>

      <div className="info-container">
        <h1>{service.title}</h1>
        <p>
          {service.subTitle} - {service.status ? "Online" : "Offline"}
        </p>
        <ServicesTag size="small" title={service.category.title} />
      </div>
    </ServicesCardWrapper>
  );
};

const ServicesCardWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;

  border-radius: 24px;
  height: 122px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);

  border: 1px solid transparent;

  &:hover {
    border: 1px solid var(--background-gradient);
  }

  .icon-container {
    height: 122px;
    width: 122px;
    border-radius: 24px;

    background-color: rgba(120, 120, 120, 0.1);
  }

  .info-container {
    display: flex;
    flex-direction: column;

    padding: 12px;
  }
`;

export default ServicesCard;
