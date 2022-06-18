import React from "react";
import FilterRow from "../../compoments/Molecules/FilterRow";
import ServicesCardList from "../../compoments/Organisms/ServicesCardList";
import { SearchBar } from "../../compoments/Atoms/SearchBar";
import HomeTemplate from "../../compoments/Template/HomeTemplate";
import { useServices } from "../../Providers/ServicesContext";
import ServicePage from "../ServicePage";
import { useService } from "../../Providers/ServiceContext";

const ServicesPage: React.FC = () => {
  const { services, categories } = useServices();
  const { currentService, setCurrentService } = useService();
  return (
    <>
      <HomeTemplate>
        <SearchBar />
        <FilterRow categoriesTags={categories} />
        <ServicesCardList services={services} />
      </HomeTemplate>
      <ServicePage
        onBack={() => setCurrentService(undefined)}
        service={currentService}
        show={!!currentService}
      />
    </>
  );
};

export default ServicesPage;
