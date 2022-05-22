import { shade } from 'polished';
import styled from 'styled-components';

import SignInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
      transition: color 0.2s;
    }
  }

  a {
    svg {
      margin-right: 16px;
    }

    color: #054f77;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#054f77')};
    }
    transition: color 0.2s;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
