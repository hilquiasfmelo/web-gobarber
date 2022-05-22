import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

/**
 * Propriedades que um Button pode receber
 */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    {children}
  </Container>
);
