import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #054f77;
  height: 56px;
  border-radius: 10px;
  border: 0;
  color: #F4EDE8;
  padding: 0 16px;
  margin-top: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;

  &:hover {
      background: ${shade(0.2, '#054f77')};
    }
    transition: background 0.2s;
`;
