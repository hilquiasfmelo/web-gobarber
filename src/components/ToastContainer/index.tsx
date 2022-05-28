import React from 'react';
import { ToastMessage, useToast } from '../../hooks/Toast';
import Toast from './Toast';
import { Container } from './styles';

type ToastContainerProps = {
 messages: ToastMessage[];
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => (
  <Container>
    {
    messages.map((message) => (
      <Toast key={message.id} message={message} />
    ))
  }
  </Container>
);
