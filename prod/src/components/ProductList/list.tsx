import React from 'react';
import { Product } from '../../types';
import ProductCard from '../ProoctCard/card';


type ProductListProps = {
  products: Product[];
  removeProduct: (name: string) => void;
  updateProductQuantity: (productName: string, newQuantity: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, removeProduct, updateProductQuantity }) => {
  return (
    <div>
      {products.length === 0 ? (
        <p>Nenhum produto no estoque.</p>
      ) : (
        <div className="product-card-container">
          {products.map(product => (
            <ProductCard 
              key={product.name} 
              product={product} 
              removeProduct={removeProduct} 
              updateProductQuantity={updateProductQuantity}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
