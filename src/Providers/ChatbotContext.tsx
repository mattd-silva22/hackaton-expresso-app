import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import handleResponse from "../utils/options";

export enum WhoType {
  user = "user",
  server = "server",
}

export type MsgType = {
  who: WhoType;
  msg: string;
};

interface ChatbotContextData {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  handleSubmit: (value: string) => void;
  messages: MsgType[];
}

export const ChatbotContext = createContext<ChatbotContextData>(
  {} as ChatbotContextData
);

export const ChatbotProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [userChoices, setUserChoices] = useState<string[]>([]);
  const [messages, setMessages] = useState<MsgType[]>([
    {
      who: WhoType.server,
      msg: "Olá! Eu sou a Iasmim! Em que posso ajudar?",
    },
  ]);

  const handleSubmit = useCallback(
    (value: string) => {
      const newMsg = {
        who: WhoType.user,
        msg: value,
      };
      const resp = handleResponse(newMsg) as MsgType;
      const oldHistory = messages;
      const newHistory = oldHistory.concat(newMsg);
      const zap = newHistory.concat(resp);

      setMessages(zap);
    },
    [messages, setMessages]
  );

  useEffect(() => {
    if (modalVisible && messages.length <= 0) {
      handleSubmit("Olá");
    }
  }, [modalVisible, messages, handleSubmit]);

  return (
    <ChatbotContext.Provider
      value={{ modalVisible, setModalVisible, handleSubmit, messages }}
    >
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
