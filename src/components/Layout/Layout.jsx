import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <Sidebar />
    <main className="content">{children}</main>
  </div>
);

export default Layout;
