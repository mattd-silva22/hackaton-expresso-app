import React from "react";
import styled from "styled-components";

const AssistenceHeader: React.FC = () => {
  return (
    <AssistenceHeaderWrapper>
      {/* <img src={} alt="Background"/> */}
    </AssistenceHeaderWrapper>
  );
};

const AssistenceHeaderWrapper = styled.div`
  background-image: url("../../../assets/assistance_background.svg");
  width: 100%;
  height: 241px;
  /* position: absolute;
  top: 0px; */

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(.jpg);
`;

export default AssistenceHeader;
