import React, { useContext, createContext, useState } from "react";
import { ServicesModel } from "../models/services.model";

interface ServiceContextData {
  currentService: ServicesModel | undefined;
  setCurrentService: (currentService: ServicesModel | undefined) => void;
}

export const ServiceContext = createContext<ServiceContextData>(
  {} as ServiceContextData
);

export const ServiceProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [currentService, setCurrentService] = useState<
    ServicesModel | undefined
  >();

  return (
    <ServiceContext.Provider value={{ currentService, setCurrentService }}>
      {children}
    </ServiceContext.Provider>
  );
};

export function useService(): ServiceContextData {
  const context: ServiceContextData = useContext(ServiceContext);

  if (!context) {
    throw new Error("useService must be used within an ServiceProvider");
  }

  return context;
}
