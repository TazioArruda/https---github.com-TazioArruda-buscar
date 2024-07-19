import { useTheme } from 'styled-components';
import { Product } from '../../types';
import { Button, Card, Details, Header } from './ProductCard.styles';


type ProductCardProps = {
  product: Product;
  removeProduct: (name: string) => void;
  updateProductQuantity: (productName: string, newQuantity: number) => void;
}

const ProductCard = ({ product, removeProduct, updateProductQuantity }: ProductCardProps) => {
  const { theme } = useTheme();

  const handleRemoveClick = () => {
    if (window.confirm(`Tem certeza que deseja remover o produto ${product.name}?`)) {
      removeProduct(product.name);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      updateProductQuantity(product.name, newQuantity);
    } else {
      alert('A quantidade deve ser um número inteiro positivo.');
    }
  };

  return (
    <Card className={theme}>
      <Header>{product.name}</Header>
      <Details>{product.description}</Details>
      <Details>Preço: R${product.price}</Details>
      <Details>Quantidade: 
        <input 
          type="number" 
          value={product.quantity} 
          onChange={handleQuantityChange}
        />
      </Details>
      <Button onClick={handleRemoveClick}>Remover</Button>
    </Card>
  );
};

export default ProductCard;