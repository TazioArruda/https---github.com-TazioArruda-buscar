import { useState } from 'react';
import { Product } from './types';
import './App.css';
import ProductForm from './components/ProductForm/product';
import ProductList from './components/ProductList/list';
import { useTheme } from './components/context/themeContext';


const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (productName: string) => {
    if (window.confirm(`Tem certeza que deseja remover o produto ${productName}?`)) {
      setProducts(products.filter(product => product.name !== productName));
    }
  };

  const updateProductQuantity = (productName: string, newQuantity: number) => {
    setProducts(products.map(product => 
      product.name === productName ? { ...product, quantity: newQuantity } : product
    ));
  };

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>
        Alternar para tema {theme === 'claro' ? 'escuro' : 'claro'}
      </button>
      <h1>Controle de Estoque</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList 
        products={products} 
        removeProduct={removeProduct} 
        updateProductQuantity={updateProductQuantity} 
      />
    </div>
  );
};

export default App;
