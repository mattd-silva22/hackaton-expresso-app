import React, { useContext, createContext, useState } from "react";

interface ChatbotContextData {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

export const ChatbotContext = createContext<ChatbotContextData>(
  {} as ChatbotContextData
);

export const ChatbotProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <ChatbotContext.Provider value={{ modalVisible, setModalVisible }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export function useChatbot(): ChatbotContextData {
  const context: ChatbotContextData = useContext(ChatbotContext);

  if (!context) {
    throw new Error("useChatbot must be used within an ChatbotProvider");
  }

  return context;
}
