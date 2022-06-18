export interface ServicesModel {
  id: string | number;
  icon: string;
  status: boolean;
  title: string;
  subTitle: string;
  categoryId: string | number;
  isFavorite: boolean;
  category: Partial<CategoriesModel>;
}

export interface CategoriesModel {
  id: string | number;
  title: string;
  enabled: boolean;
  icon?: string;
  color?: string;
}
