import { useState } from 'react';
import { Product } from '../../types';
import { useTheme } from 'styled-components';


type ProductFormProps = {
  addProduct: (product: Product) => void;
}

const ProductForm = ({ addProduct }:ProductFormProps) => {
  const {theme} = useTheme();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState<'Comida' | 'Bebida' | 'Não comestível'>('Comida');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name && price && quantity) {
      addProduct({ name, description, price: parseFloat(price), quantity: parseInt(quantity), category });
      setName('');
      setDescription('');
      setPrice('');
      setQuantity('');
      setCategory('Comida')

    } else {
      alert('Todos os campos devem ser preenchidos.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={theme}>
      <input 
        type="text" 
        placeholder="Nome" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Descrição" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Preço" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Quantidade" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)} 
      />
      <select value={category} onChange={(e) => setCategory(e.target.value as 'Comida' | 'Bebida' | 'Não comestível')}>
        <option value="Comida">Comida</option>
        <option value="Bebida">Bebida</option>
        <option value="Não comestível">Não comestível</option>
      </select>
      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

export default ProductForm;