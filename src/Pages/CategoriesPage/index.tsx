import React from "react";
import CategoriesList from "../../compoments/Molecules/CategoriesList";
import HomeTemplate from "../../compoments/Template/HomeTemplate";
import { categories } from "../../mock";

// import { Container } from './styles';

const CategoriesPage: React.FC = () => {
  return (
    <HomeTemplate>
      <h1
        style={{
          fontSize: 24,
          fontWeight: "bolder",
          marginBottom: 14,
          marginTop: 16,
          color: "#727171",
        }}
      >
        Categorias
      </h1>
      <CategoriesList categories={categories} />
    </HomeTemplate>
  );
};

export default CategoriesPage;
