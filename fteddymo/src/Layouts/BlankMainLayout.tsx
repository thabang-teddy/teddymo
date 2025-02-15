import React from 'react';
import { LayoutProps } from '../Types/global';

const BlankMainLayout: React.FC<LayoutProps> = ({ title, children}) => {
  return (
    <div className="d-flex flex-column vh-100 vw-100" title={title}>
      {children}
    </div>
  );
};

export default BlankMainLayout;
