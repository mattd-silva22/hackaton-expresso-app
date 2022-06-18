import React from "react";
import CategoriesList from "../../compoments/Molecules/CategoriesList";
import HomeTemplate from "../../compoments/Template/HomeTemplate";
import { categories } from "../../mock";

// import { Container } from './styles';

const CategoriesPage: React.FC = () => {
  return (
    <HomeTemplate>
      <CategoriesList categories={categories} />
    </HomeTemplate>
  );
};

export default CategoriesPage;
