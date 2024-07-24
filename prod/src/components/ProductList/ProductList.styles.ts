// src/components/ProductList/ProductList.styles.tsx
import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Permite que os itens se movam para a próxima linha
  gap: 10px; // Espaçamento entre os itens
  margin-bottom: 20px;
  justify-content: space-between;
`;
