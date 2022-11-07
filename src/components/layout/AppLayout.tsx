import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../sidebar/Sidebar';

export const AppLayout: FC = () => {
  return (
    <div
      style={{
        padding: '0px 0px 0px 370px',
      }}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
};
