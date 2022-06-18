import React from "react";
import styled from "styled-components";
import { ServicesModel } from "../../../models/services.model";
import { useServices } from "../../../Providers/ServicesContext";
import ServicesTag from "../../Atoms/CategoryTag";

interface IServicesCard {
  service: ServicesModel;
}

const ServicesCard: React.FC<IServicesCard> = ({ service }) => {
  const { favorite } = useServices();
  return (
    <ServicesCardWrapper>
      <div className="icon-container">
        <img
          alt={service.title}
          src={require(`../../../assets/services/${service.icon}.svg`)}
        />
      </div>

      <div className="info-container">
        <h1>{service.title}</h1>
        <p className="subTile">
          {service.subTitle} - {service.status ? "Online" : "Offline"}
        </p>
        {!!service.category?.title && (
          <ServicesTag disabled size="small" title={service.category.title} />
        )}
      </div>
      <div className="heart-container">
        {service.isFavorite ? (
          <img
            src={require("../../../assets/heart_enabled.svg").default}
            alt="Favoritar serviço"
            height={22}
            onClick={() => favorite(service.id)}
          />
        ) : (
          <img
            src={require("../../../assets/heart_disabled.svg").default}
            alt="Desfavoritar serviço"
            height={22}
            onClick={() => favorite(service.id)}
          />
        )}
      </div>
    </ServicesCardWrapper>
  );
};

const ServicesCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  border-radius: 24px;
  height: 122px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);

  & + & {
    margin-top: 24px;
  }

  .icon-container {
    height: 122px;
    width: 122px;
    border-radius: 24px;

    background-color: rgba(120, 120, 120, 0.1);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info-container {
    display: flex;
    flex-grow: 2;
    flex-direction: column;
    max-height: 122px;

    align-items: flex-start;
    justify-content: center;
    padding: 0 16px;

    h1 {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;

      color: #727171;
    }

    .subTile {
      padding-bottom: 8px;
      opacity: 0.41;
      font-weight: 400;
      font-size: 12px;
    }
  }

  .heart-container {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 18px;
    cursor: pointer;
  }
`;

export default ServicesCard;
