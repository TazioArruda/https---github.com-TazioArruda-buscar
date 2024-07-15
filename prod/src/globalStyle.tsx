import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0f0f0; /* Cor cinza clara */
    font-family: Arial, sans-serif; /* Fonte padrão */
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  input {
    display: block;
    margin-bottom: 10px;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px;
    box-sizing: border-box;
  }

  .product-card input {
    width: calc(100% - 20px); /* Ajusta a largura do input dentro do card */
    margin-bottom: 0;
  }
`;

export default GlobalStyle;