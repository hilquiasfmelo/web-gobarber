import React, {
  createContext, ReactNode, useCallback, useContext, useState,
} from 'react';
import { v4 as uuidV4 } from 'uuid';
import { ToastContainer } from '../components/ToastContainer';

type ToastContextData = {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

type ToastProviderProps = {
  children: ReactNode;
}

export type ToastMessage = {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description ?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(({ type, title, description }: Omit<ToastMessage, 'id'>) => {
    const toast = {
      id: uuidV4(),
      type,
      title,
      description,
    };

    setMessages([...messages, toast]);
  }, [messages]);

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextData => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};
