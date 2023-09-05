import React, { createContext, useState, useContext } from 'react';

// Create a new context for product data
export const ProductContext = createContext();

// Create a custom hook to access the product context
export const useProductContext = () => {
  return useContext(ProductContext);
};

// Define the ProductProvider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Function to add a new product to the list
  const addProduct = (newProduct) => {
    // You can generate a unique ID here if needed
    // For example: newProduct.id = generateUniqueId();

    // Update the products list
    setProducts([...products, newProduct]);
  };

  // You can fetch initial product data from an API or JSON Server here
  // useEffect(() => {
  //   fetchProductsFromServer().then((data) => setProducts(data));
  // }, []);

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};