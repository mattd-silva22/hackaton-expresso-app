import React from "react";
import styled from "styled-components";
import { usePages } from "../../../Providers/PagesContext";
import { useServices } from "../../../Providers/ServicesContext";

interface ICategoriesCard {
  color: string;
  icon: string;
  name: string;
  id: string;
}

const CategoriesCard: React.FC<ICategoriesCard> = ({
  color,
  icon,
  name,
  id,
}) => {
  const { Pages, changePage } = usePages();
  const { addOrRemoveFilter } = useServices();

  return (
    <CategoriesCardWrapper>
      <div
        className="icon-conteiner"
        style={{ backgroundColor: color }}
        onClick={() => {
          addOrRemoveFilter(id);
          changePage(Pages.HOME);
        }}
      >
        <img
          src={require(`../../../assets/categories/${icon}.svg`)}
          alt={name}
        />
      </div>
      <div className="title-container">
        <p>{name}</p>
      </div>
    </CategoriesCardWrapper>
  );
};

const CategoriesCardWrapper = styled.div`
  height: 146px;
  width: 163px;

  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  margin: 8px;

  display: flex;
  flex-direction: column;

  cursor: pointer;

  .icon-conteiner {
    width: 100%;
    height: 73px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  }

  .title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    p {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;

      text-align: center;

      color: #727171;
    }
  }
`;

export default CategoriesCard;
