import React from 'react';
import { useTransition } from 'react-spring';
import { ToastMessage } from '../../hooks/Toast';
import { Toast } from './Toast';
import { Container } from './styles';

type ToastContainerProps = {
 messages: ToastMessage[];
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {
    messagesWithTransitions.map(({ key, item, props }) => (
      <Toast key={key} style={props} message={item} />
    ))
  }
    </Container>
  );
};
