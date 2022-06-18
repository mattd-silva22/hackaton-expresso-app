import React from "react";
import styled from "styled-components";
import { CategoriesModel } from "../../../models/services.model";
import { useServices } from "../../../Providers/ServicesContext";
import ServicesTag from "../../Atoms/CategoryTag";

interface FilterRowProps {
  categoriesTags: CategoriesModel[];
}

const FilterRow: React.FC<FilterRowProps> = ({ categoriesTags }) => {
  const { addOrRemoveFilter, isFavorite, setIsFavorite } = useServices();
  return (
    <FilterRowContainer>
      <ServicesTag
        title="Favoritos"
        enabled={isFavorite}
        size="medium"
        onClick={() => setIsFavorite(!isFavorite)}
      />
      {categoriesTags
        .sort((a, b) => {
          if (a.enabled && !b.enabled) {
            return -1;
          }
          return 0;
        })
        .map((category) => (
          <ServicesTag
            key={category.id}
            title={category.title}
            enabled={category.enabled}
            size="medium"
            onClick={() => addOrRemoveFilter(category.id as string)}
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
  padding: 0 24px;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;

  overflow-y: scroll;
`;

export default FilterRow;
