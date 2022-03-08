import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Product from './pages/Product/Product';

const App = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const response = await axios.get('http://localhost:5000/products');
    setData(response.data);
  };

  React.useEffect(() => {
    // getData();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Category />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
