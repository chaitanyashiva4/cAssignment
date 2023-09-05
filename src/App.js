import React from 'react';
import { BrowserRouter as Router,Routes,  Route,Link } from 'react-router-dom';
import AllProductsPage from './components/AllProductsPage';
import AboutPage from './components/AboutPage';
import ProductsPage from './components/ProductsPage';
import AddProductPage from './components/AddProductPage';
import { ProductProvider } from './context/ProductContext';
import Main from './components/Main';

function App() {
  return (
    <Router>     
        <div>
          {/* Navigation Links */}
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/products/add">Add Products</Link>
              </li>
              <li>
                <Link to="/AllProductsPage">All Products</Link>
              </li>
            </ul>
          </nav>
          {/* Routing */}
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products/add" element={<AddProductPage />} />
            <Route path="/products" element={<ProductsPage />} />              
            <Route path="/AllProductsPage" element={<AllProductsPage />} />              
          </Routes>
        </div>
    </Router>
  );
}

export default App;