import React from "react";
import { ChatbotProvider } from "./ChatbotContext";
import { PagesProvider } from "./PagesContext";
import { ServiceProvider } from "./ServiceContext";
import { ServicesProvider } from "./ServicesContext";

// import { Container } from './styles';

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <PagesProvider>
      <ServicesProvider>
        <ServiceProvider>
          <ChatbotProvider>{children}</ChatbotProvider>
        </ServiceProvider>
      </ServicesProvider>
    </PagesProvider>
  );
};

export default AppProvider;
