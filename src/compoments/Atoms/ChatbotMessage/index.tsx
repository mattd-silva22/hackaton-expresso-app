import moment from "moment";
import React from "react";
import styled, { css } from "styled-components";

export interface IChatbotMessage {
  message: string;
  date: Date;
  received: boolean;
}

const ChatbotMessage: React.FC<IChatbotMessage> = ({
  date,
  message,
  received,
}) => {
  return (
    <ChatbotMessageWrapper received={received}>
      <span className="message-container">{message}</span>
      <span className="date-container">{moment(date).format("LT")}</span>
    </ChatbotMessageWrapper>
  );
};

interface IChatbotMessageWrapper {
  received: boolean;
}

const ChatbotMessageWrapper = styled.div<IChatbotMessageWrapper>`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 16px 16px;

  & + & {
    padding: 8px 16px;
  }

  .message-container {
    display: flex;
    border-radius: 12px 12px 0px 12px;
    padding: 16px;
    font-size: 14px;
    align-items: center;
  }

  .date-container {
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0 4px;
    font-size: 10px;
    color: rgba(0, 0, 0, 0.4);
  }

  ${(props) =>
    props.received &&
    css`
      .message-container {
        border-radius: 0px 12px 12px 12px;
        background: #d9d9d9;
      }
    `};

  ${(props) =>
    !props.received &&
    css`
      flex-direction: row-reverse;
      .message-container {
        background: #dcf8c6;
        justify-content: flex-end;
      }

      .date-container {
        justify-content: flex-end;
      }
    `};
`;

export default ChatbotMessage;
