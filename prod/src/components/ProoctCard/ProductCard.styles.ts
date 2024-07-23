// src/components/ProductCard/ProductCard.styles.tsx
import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  width: 200px; // Largura do card para permitir até 4 por linha
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);

  &.claro {
    background-color: #fff;
    color: #000;
  }

  &.escuro {
    background-color: #000;
    color: #fff;
  }
`;

export const Header = styled.h3`
  margin: 0;
`;

export const Details = styled.p`
  margin: 5px 0;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
