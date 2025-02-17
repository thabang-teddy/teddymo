import React from "react";
import { LayoutProps } from "../Types/global";
// import AlertComponent from "../Components/AlertComponent";

const BlankMainLayout: React.FC<LayoutProps> = ({
  title,
  children,
}) => {
  return (
    <div className="d-flex flex-column vh-100 vw-100" data-title={title}>
      {children}
    </div>
  );
};

export default BlankMainLayout;
