import React from "react";
import { ChatbotProvider } from "./ChatbotContext";
import { PagesProvider } from "./PagesContext";
import { ServicesProvider } from "./ServicesContext";

// import { Container } from './styles';

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <PagesProvider>
      <ServicesProvider>
        <ChatbotProvider>{children}</ChatbotProvider>
      </ServicesProvider>
    </PagesProvider>
  );
};

export default AppProvider;
