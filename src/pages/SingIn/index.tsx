import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

export const SingIn: React.FC = () => (
  <Container>
    <Content>
      <img src={LogoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu login</h1>
        <input type="text" placeholder="Seu melhor e-Mail" />
        <input type="password" placeholder="Sua senha preferida" />

        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="account">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>

    <Background />
  </Container>
);
