import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AddProductForm from './AddProductForm';
import { ProductContext } from '../context/ProductContext';

const AddProductPage = ({ history }) => {
  const { addProduct } = useContext(ProductContext);

  const handleAddProduct = (product) => {
    // Add the new product to your products list (state or context)
    addProduct(product);

    // Redirect to the products page
    history.push('/products');
  };

  return (
    <div>
      <h1>Add Product</h1>
      <AddProductForm addProduct={handleAddProduct} />
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default AddProductPage;