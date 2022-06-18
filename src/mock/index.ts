import { CategoriesModel, ServicesModel } from "../models/services.model";

export const services: ServicesModel[] = [
  {
    id: 1,
    status: true,
    categoryId: 1,
    icon: "document",
    title: "Obter carteira de identidade - 1ª via",
    subTitle: "Possui custos",
    isFavorite: true,
    category: {
      title: "Assistencia",
    },
  },
  {
    id: 2,
    status: true,
    categoryId: 1,
    icon: "car",
    title: "Consultar veículo",
    subTitle: "Gratuito",
    isFavorite: false,
    category: {
      title: "Veiculos e condutores",
    },
  },
  {
    id: 3,
    status: true,
    categoryId: 2,
    icon: "plant",
    title: "Obter carteira de identidade - 2ª via",
    subTitle: "Possui custos",
    isFavorite: true,
    category: {
      title: "Agricultura e pecuaria",
    },
  },
  {
    id: 4,
    status: true,
    categoryId: 4,
    icon: "security",
    title: "Obter Atestado de Antecedentes Criminais Online",
    subTitle: "Possui custos",
    isFavorite: false,
    category: {
      title: "Segurança pública",
    },
  },
];

export const categories: CategoriesModel[] = [
  {
    id: 1,
    title: "Agricultura e pecuaria",
    enabled: false,
    icon: "agripecu",
    color: "#54CFA3",
  },
  {
    id: 2,
    title: "Assistência Social",
    enabled: false,
    icon: "hand",
    color: "#525150",
  },
  {
    id: 3,
    title: "Veículos e condutores",
    enabled: false,
    icon: "car",
    color: "#145D86",
  },
  {
    id: 4,
    title: "Educação",
    enabled: false,
    icon: "cap",
    color: "#525972",
  },
  {
    id: 5,
    title: "Cultura",
    enabled: false,
    icon: "mask",
    color: "#5B76D4",
  },
  {
    id: 6,
    title: "Turismo",
    enabled: false,
    icon: "plane",
    color: "#3F8398",
  },
  {
    id: 7,
    title: "Justiça",
    enabled: false,
    icon: "balance",
    color: "#7641AB",
  },
  {
    id: 8,
    title: "Saúde",
    enabled: false,
    icon: "heart",
    color: "#E37777",
  },
  {
    id: 9,
    title: "Esporte",
    enabled: false,
    icon: "esporte",
    color: "#E7A678",
  },
  {
    id: 10,
    title: "Finanças",
    enabled: false,
    icon: "financas",
    color: "#525972",
  },
];
