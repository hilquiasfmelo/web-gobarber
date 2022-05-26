import React, { ReactNode } from 'react';
import { AuthProvider } from './Auth';
import { ToastProvider } from './Toast';

type AppProviderProps = {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      {children}
    </ToastProvider>
  </AuthProvider>
);
