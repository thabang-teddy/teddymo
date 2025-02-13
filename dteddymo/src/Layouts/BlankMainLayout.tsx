import React from 'react';
import { LayoutProps } from '../Types/global';

const BlankMainLayout: React.FC<LayoutProps> = ({ title, children, showNavbar = true }) => {
  return (
    <div className="d-flex flex-column vh-100 vw-100">
      {children}
    </div>
  );
};

export default BlankMainLayout;
