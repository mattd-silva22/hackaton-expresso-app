import React from "react";
import { ChatbotProvider } from "./ChatbotContext";
import { PagesProvider } from "./PagesContext";

// import { Container } from './styles';

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <PagesProvider>
      <ChatbotProvider>{children}</ChatbotProvider>
    </PagesProvider>
  );
};

export default AppProvider;
