import React from 'react';
import { Product } from '../../types';
import { ProductCardContainer } from './ProductList.styles';
import ProductCard from '../ProoctCard/card';

type ProductListProps = {
  products: Product[];
  removeProduct: (name: string) => void;
  updateProductQuantity: (productName: string, newQuantity: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, removeProduct, updateProductQuantity }) => {
  const categorizedProducts = {
    Comida: products.filter(product => product.category === 'Comida'),
    Bebida: products.filter(product => product.category === 'Bebida'),
    'Não comestível': products.filter(product => product.category === 'Não comestível')
  };

  return (
    <div>
      {Object.entries(categorizedProducts).map(([category, products]) => (
        <div key={category}>
          <h2>{`${category} (${products.length})`}</h2>
          {products.length === 0 ? (
            <p>Nenhum produto na categoria {category}.</p>
          ) : (
            <ProductCardContainer>
              {products.map(product => (
                <ProductCard 
                  key={product.name} 
                  product={product} 
                  removeProduct={removeProduct} 
                  updateProductQuantity={updateProductQuantity}
                />
              ))}
            </ProductCardContainer>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
