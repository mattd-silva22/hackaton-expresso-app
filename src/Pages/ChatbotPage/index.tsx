import React from "react";
import Modal from "../../compoments/Atoms/Modal";
import ChatbotHeader from "../../compoments/Template/ChatbotHeader";
import { useChatbot } from "../../Providers/ChatbotContext";

const ChatbotPage: React.FC = () => {
  const { modalVisible, setModalVisible } = useChatbot();

  return (
    <Modal onClose={() => setModalVisible(false)} show={modalVisible}>
      <ChatbotHeader onBack={() => setModalVisible(false)} />
    </Modal>
  );
};

export default ChatbotPage;
