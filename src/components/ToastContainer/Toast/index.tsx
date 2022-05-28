import React, { useEffect } from 'react';
import {
  FiAlertCircle, FiAlertTriangle, FiCheckCircle, FiInfo, FiXCircle,
} from 'react-icons/fi';
import { ToastMessage, useToast } from '../../../hooks/Toast';
import { Container } from './styles';

type ToasProps = {
  message: ToastMessage;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertTriangle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToasProps> = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);
  }, [removeToast, message.id]);

  return (
    <Container type={message.type} hasDescription={!!message.description}>
      {icons[message.type || 'info']}

      <div>
        <strong>
          {message.title}
          {message.type === 'success' ? '🤗' : '🥲'}
        </strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
