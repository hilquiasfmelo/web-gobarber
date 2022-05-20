import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #0B090A;
    color: #F4EDE8;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Source Sans Pro', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;
