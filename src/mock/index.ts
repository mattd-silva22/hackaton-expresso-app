import { CategoriesModel, ServicesModel } from "../models/services.model";

export const services: ServicesModel[] = [
  {
    id: 1,
    status: true,
    categoryId: 1,
    icon: "",
    title: "Obter carteira de identidade - 2ª via",
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
    icon: "",
    title: "Obter carteira de identidade - 2ª via",
    subTitle: "Possui custos",
    isFavorite: false,
    category: {
      title: "Assistencia",
    },
  },
];

export const categories: CategoriesModel[] = [
  {
    id: 1,
    title: "Assistencia",
    enabled: false,
  },
  {
    id: 2,
    title: "Assistencia",
    enabled: false,
  },
  {
    id: 3,
    title: "Assistencia",
    enabled: false,
  },
  {
    id: 3,
    title: "Assistencia",
    enabled: false,
  },
  {
    id: 4,
    title: "Assistencia",
    enabled: false,
  },
  {
    id: 5,
    title: "Assistencia",
    enabled: false,
  },
  {
    id: 6,
    title: "Assistencia",
    enabled: false,
  },
  {
    id: 7,
    title: "Assistencia",
    enabled: false,
  },
  {
    id: 8,
    title: "Assistencia",
    enabled: false,
  },
];
