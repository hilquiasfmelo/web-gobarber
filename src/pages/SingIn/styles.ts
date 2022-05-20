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

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      color: #F4EDE8;
      padding: 16px;
      width: 100%;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #A4161A;
      height: 56px;
      border-radius: 10px;
      border: 0;
      color: #F4EDE8;
      padding: 0 16px;
      margin-top: 16px;
      width: 100%;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: ${shade(0.2, '#A4161A')};
      }
      transition: background 0.2s;
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

    color: #A4161A;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#A4161A')};
    }
    transition: color 0.2s;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
