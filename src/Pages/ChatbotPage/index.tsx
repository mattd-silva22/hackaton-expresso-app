import React from "react";
import ChatbotMessage, {
  IChatbotMessage,
} from "../../compoments/Atoms/ChatbotMessage";
import MessageInput from "../../compoments/Atoms/MessageInput";
import Modal from "../../compoments/Atoms/Modal";
import ChatbotHeader from "../../compoments/Template/ChatbotHeader";
import { useChatbot } from "../../Providers/ChatbotContext";

const messages: IChatbotMessage[] = [
  {
    message: "Olá, sou a Assistente Expresso. Em que posso te ajudar?",
    date: new Date(),
    received: true,
  },
  {
    message: "Gostaria de saber como ",
    date: new Date(),
    received: false,
  },
  {
    message: "Comer pastel",
    date: new Date(),
    received: false,
  },
  {
    message: "Comer pastel",
    date: new Date(),
    received: false,
  },
  {
    message: "Comer pastel",
    date: new Date(),
    received: false,
  },
  {
    message: "Comer pastel",
    date: new Date(),
    received: false,
  },
  {
    message: "Comer pastel",
    date: new Date(),
    received: false,
  },
  {
    message: "Comer pastel",
    date: new Date(),
    received: false,
  },
  {
    message: "Comer pastel",
    date: new Date(),
    received: false,
  },
  {
    message: "Comer pastel",
    date: new Date(),
    received: false,
  },
  {
    message: "Comer pastel",
    date: new Date(),
    received: false,
  },
  {
    message: "Comer pastel",
    date: new Date(),
    received: false,
  },
  {
    message: "Comer pastel",
    date: new Date(),
    received: false,
  },
  {
    message: "Comer pastel",
    date: new Date(),
    received: false,
  },
  {
    message: "Comer pastel",
    date: new Date(),
    received: false,
  },
];

const ChatbotPage: React.FC = () => {
  const { modalVisible, setModalVisible } = useChatbot();

  return (
    <Modal onClose={() => setModalVisible(false)} show={modalVisible}>
      <ChatbotHeader onBack={() => setModalVisible(false)} />
      {messages.map((message) => (
        <ChatbotMessage
          message={message.message}
          date={message.date}
          received={message.received}
        />
      ))}
      <MessageInput />
    </Modal>
  );
};

export default ChatbotPage;
