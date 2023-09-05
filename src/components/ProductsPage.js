import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const ProductsPage = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h1>Products</h1>
      <Link to="/products/add">Add Product</Link>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <Link to={`/products/${product.id}`}>{product.ProductName}</Link>
              </td>
              <td>{product.Quantity}</td>
              <td>{product.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;