import React from "react";
import AssistenceHeader from "../AssistenceHeader";
import Footer from "../Footer";

const AssistanceTemplate: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <AssistenceHeader />
      {children}
      <Footer />
    </>
  );
};

export default AssistanceTemplate;
