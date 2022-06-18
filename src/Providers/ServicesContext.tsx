import React, { useContext, createContext, useState, useMemo } from "react";
import { CategoriesModel, ServicesModel } from "../models/services.model";
import { services as servs, categories as cat } from "../mock";
import Fuse from "fuse.js";

interface ServicesContextData {
  favorite: (id: string | number) => void;
  addOrRemoveFilter: (categoryId: string) => void;
  services: ServicesModel[];
  categories: CategoriesModel[];
  setSearch: (value: string) => void;
  setIsFavorite: (a: boolean) => void;
  isFavorite: boolean;
}

export const ServicesContext = createContext<ServicesContextData>(
  {} as ServicesContextData
);

export const ServicesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [services, setServices] = useState<ServicesModel[]>(servs);
  const [categories, setCategories] = useState<CategoriesModel[]>(cat);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const filteredServices = useMemo(() => {
    if (filter.length <= 0) {
      if (!!search) {
        const fuse = new Fuse(services, {
          keys: ["title", "subTitle"],
        });

        const result = fuse.search(search).map(({ item }) => item);

        if (isFavorite) {
          return result.filter((r) => r.isFavorite);
        }
        return result;
      }

      if (isFavorite) {
        return services.filter((r) => r.isFavorite);
      }
      return services;
    }

    if (!!search) {
      const fuse = new Fuse(services, {
        keys: ["title", "subTitle"],
      });

      const result = fuse.search(search).map(({ item }) => item);
      if (isFavorite) {
        return result.filter(
          (s) => filter.some((f) => f === s.categoryId) && s.isFavorite
        );
      }
      return result.filter((s) => filter.some((f) => f === s.categoryId));
    }

    if (isFavorite) {
      return services.filter(
        (s) => filter.some((f) => f === s.categoryId) && s.isFavorite
      );
    }

    return services.filter((s) => filter.some((f) => f === s.categoryId));
  }, [filter, services, search, isFavorite]);

  function favorite(id: string | number) {
    const newServices = services.map((serv) => {
      if (serv.id === id) {
        return {
          ...serv,
          isFavorite: !serv.isFavorite,
        };
      }

      return serv;
    });

    setServices(newServices);
  }

  function addOrRemoveFilter(categoryId: string) {
    let newFilter = [...filter];

    if (newFilter.some((n) => n === categoryId)) {
      newFilter = newFilter.filter((n) => n !== categoryId);
    } else {
      newFilter = newFilter.concat([categoryId]);
    }

    setFilter(newFilter);

    const newCategories = categories.map((cat) => {
      if (cat.id === categoryId) {
        return {
          ...cat,
          enabled: !cat.enabled,
        };
      }

      return cat;
    });

    setCategories(newCategories);
  }

  return (
    <ServicesContext.Provider
      value={{
        favorite,
        services: filteredServices,
        addOrRemoveFilter,
        categories,
        setSearch,
        setIsFavorite,
        isFavorite,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export function useServices(): ServicesContextData {
  const context: ServicesContextData = useContext(ServicesContext);

  if (!context) {
    throw new Error("useServices must be used within an ServicesProvider");
  }

  return context;
}
