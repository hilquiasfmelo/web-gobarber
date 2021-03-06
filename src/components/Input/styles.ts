import styled, { css } from 'styled-components';
import { Tooltip } from '../Tooltip';

type ContainerProps = {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
};

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #232129;
  color: #666360;
  display: flex;
  align-items: center;
  margin-top: 8px;

  ${(props) => props.isErrored
  && css`
   border-color: #c53030;
  `}
  ${(props) => props.isFocused
    && css`
      color: #054f77;
      border-color: #054f77;
    `}
  ${(props) => props.isFilled
  && css`
    color: #054f77;
  `}

  svg {
    margin-right: 16px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    width: 100%;

    &::placeholder {
      color: #666360;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

    svg {
      margin: 0;
    }

    span {
      background: #c53030;
      color: #f4ede8;

      &::before {
        border-color: #c53030 transparent;
      }
    }
`;
