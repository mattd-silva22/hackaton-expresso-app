import React from "react";
import styled from "styled-components";
import { CategoriesModel } from "../../../models/services.model";
import CategoriesCard from "../../Atoms/CategoriesCard";

// import { Container } from './styles';

interface ICategoriesList {
  categories: CategoriesModel[];
}

const CategoriesList: React.FC<ICategoriesList> = ({ categories }) => {
  return (
    <CategoriesListWrapper>
      {categories.map((category) => (
        <CategoriesCard
          color={category.color || "#54CFA3"}
          icon={category.icon || "agripecu"}
          name={category.title}
          key={category.id}
          id={category.id as string}
        />
      ))}
    </CategoriesListWrapper>
  );
};

const CategoriesListWrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default CategoriesList;
