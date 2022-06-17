import React from "react";
import styled from "styled-components";
import ServicesTag from "../../Atoms/ServicesTag";

// import { Container } from './styles';

export interface ICategories {
  id: string | number;
  title: string;
  enabled: boolean;
}

interface FilterRowProps {
  servicesTags: ICategories[];
}

const FilterRow: React.FC<FilterRowProps> = ({ servicesTags }) => {
  return (
    <FilterRowContainer>
      {servicesTags.map((service) => (
        <ServicesTag
          title={service.title}
          enabled={service.enabled}
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
