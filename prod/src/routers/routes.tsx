
import { BrowserRouter, Route, Routes as Rout } from 'react-router-dom';
import ProductForm from '../components/ProductForm/product';
import Navbar from '../components/Navegation/navbar';
import ProductList from '../components/ProductList/list';
import { Product } from '../types';

type RoutesProps = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productName: string) => void;
  updateProductQuantity: (productName: string, newQuantity: number) => void;
};

const Routes = ({ products, addProduct, removeProduct, updateProductQuantity }: RoutesProps) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Rout>
        <Route path="/" element={<ProductList products={products} removeProduct={removeProduct} updateProductQuantity={updateProductQuantity} />} />
        <Route path="/novo-produto" element={<ProductForm addProduct={addProduct} />} />
      </Rout>
    </BrowserRouter>
  );
};

export default Routes;