import React from "react";
import FilterRow from "../../compoments/Molecules/FilterRow";
import ServicesCardList from "../../compoments/Organisms/ServicesCardList";
import { SearchBar } from "../../compoments/Atoms/SearchBar";
import HomeTemplate from "../../compoments/Template/HomeTemplate";
import { categories, services } from "../../mock";

const ServicesPage: React.FC = () => {
  return (
    <HomeTemplate>
      <SearchBar />
      <FilterRow categoriesTags={categories} />
      <ServicesCardList services={services} />
    </HomeTemplate>
  );
};

export default ServicesPage;
