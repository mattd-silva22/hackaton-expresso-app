import React from "react";
import ChatbotMessage from "../../compoments/Atoms/ChatbotMessage";
import MessageInput from "../../compoments/Atoms/MessageInput";
import Modal from "../../compoments/Atoms/Modal";
import ChatbotHeader from "../../compoments/Template/ChatbotHeader";
import { useChatbot } from "../../Providers/ChatbotContext";

const ChatbotPage: React.FC = () => {
  const { modalVisible, setModalVisible, handleSubmit, messages } =
    useChatbot();

  return (
    <Modal show={modalVisible}>
      <ChatbotHeader onBack={() => setModalVisible(false)} />
      {messages.map((message, index) => (
        <ChatbotMessage
          key={message.msg + index}
          message={message.msg}
          who={message.who}
        />
      ))}
      <MessageInput sendMessage={handleSubmit} />
    </Modal>
  );
};

export default ChatbotPage;
