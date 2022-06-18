import React from "react";
import styled from "styled-components";

// import { Container } from './styles';

interface IAssistanceCard extends React.PropsWithChildren {
  title: string;
}

const AssistanceCard: React.FC<IAssistanceCard> = ({ children, title }) => {
  return (
    <AssistanceCardWrapper>
      <div className="border-top" />

      <h1>
        {title}
        <div className="border-h1-bottom" />
      </h1>

      {children}
    </AssistanceCardWrapper>
  );
};

const AssistanceCardWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.25);
  margin-bottom: 24px;

  padding: 29px 24px;
  min-width: 342px;
  width: 100%;
  max-width: 800px;

  position: relative;
  background-color: var(--white);

  .border-top {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 3px;
    width: 100%;
    background-color: var(--secondary);
    position: absolute;
    top: 0;
    left: 0;
  }

  h1 {
    color: var(--gray-light);
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.03em;

    margin-bottom: 16px;

    .border-h1-bottom {
      background-color: var(--gray-light);
      height: 1px;
      width: 50%;
    }
  }
`;

export default AssistanceCard;
