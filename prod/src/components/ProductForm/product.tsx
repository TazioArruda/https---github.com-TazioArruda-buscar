import { useState } from 'react';
import { Product } from '../../types';


type ProductFormProps = {
  addProduct: (product: Product) => void;
}

const ProductForm = ({ addProduct }:ProductFormProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name && price && quantity) {
      addProduct({ name, description, price: parseFloat(price), quantity: parseInt(quantity) });

    } else {
      alert('Todos os campos devem ser preenchidos.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

export default ProductForm;