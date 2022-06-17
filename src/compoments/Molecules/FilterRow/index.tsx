import React from "react";
import styled from "styled-components";
import { CategoriesModel } from "../../../models/services.model";
import ServicesTag from "../../Atoms/CategoryTag";

interface FilterRowProps {
  categoriesTags: CategoriesModel[];
}

const FilterRow: React.FC<FilterRowProps> = ({ categoriesTags }) => {
  return (
    <FilterRowContainer>
      {categoriesTags.map((category) => (
        <ServicesTag
          key={category.id}
          title={category.title}
          enabled={category.enabled}
          size="medium"
        />
      ))}
    </FilterRowContainer>
  );
};

const FilterRowContainer = styled.div`
  display: flex;

  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;

  overflow-y: scroll;
  padding: 0 12px;
`;

export default FilterRow;
