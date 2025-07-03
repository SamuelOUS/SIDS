// src/components/Layout.js
import React from 'react';
import Menu from '../components/Menu';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Menu /> {/* tu barra lateral */}
      <main style={{ flex: 1, padding: '1rem' }}>
        <Outlet /> {/* aquí se renderizan las páginas */}
      </main>
    </div>
  );
};

export default Layout;
