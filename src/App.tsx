import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './hooks';
import { Routes } from './routes';
import MainStyle from './styles/main';

export const App: React.FC = () => (
  <BrowserRouter>

    <AppProvider>
      <Routes />
    </AppProvider>
    <MainStyle />
  </BrowserRouter>
);
