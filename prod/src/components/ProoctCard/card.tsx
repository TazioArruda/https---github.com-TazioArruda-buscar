
import './style.css';
import { Product } from '../../types';

type ProductCardProps = {
  product: Product;
  removeProduct: (name: string) => void;
  updateProductQuantity: (productName: string, newQuantity: number) => void;
}

const ProductCard = ({ product, removeProduct, updateProductQuantity }: ProductCardProps) => {
  const handleRemoveClick = () => {
    if (window.confirm(`Tem certeza que deseja remover o produto ${product.name}?`)) {
      removeProduct(product.name);
    }
  };

  const handleQuantityChange = (e: any ) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      updateProductQuantity(product.name, newQuantity);
    } else {
      alert('A quantidade deve ser um número inteiro positivo.');
    }
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Preço: R${product.price}</p>
      <p>Quantidade: 
        <input 
          type="number" 
          value={product.quantity} 
          onChange={handleQuantityChange}
        />
      </p>
      <button onClick={handleRemoveClick}>Remover</button>
    </div>
  );
};

export default ProductCard;