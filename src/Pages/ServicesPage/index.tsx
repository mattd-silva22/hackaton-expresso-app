import React from "react";
import FilterRow from "../../compoments/Molecules/FilterRow";
import ServicesCardList from "../../compoments/Organisms/ServicesCardList";
import { SearchBar } from "../../compoments/Atoms/SearchBar";
import HomeTemplate from "../../compoments/Template/HomeTemplate";
import { useServices } from "../../Providers/ServicesContext";

const ServicesPage: React.FC = () => {
  const { services, categories } = useServices();
  return (
    <HomeTemplate>
      <SearchBar />
      <FilterRow categoriesTags={categories} />
      <ServicesCardList services={services} />
    </HomeTemplate>
  );
};

export default ServicesPage;
