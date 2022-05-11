import react from 'react';
import { Routes, Route } from "react-router-dom";
// SCREENS
import Home from './Screens/Home';
import Categories from './Screens/Categories';
import Cart from './Screens/Cart/Cart';
import ListCategories from './Components/ListCategories/ListCategories';
import DetailProduct from "./Screens/DetailProduct"
import React from 'react';


function App() {

 

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail-product" element={<DetailProduct />} />
        <Route path="/categories/:categoryName" element={<ListCategories />} />
      </Routes>
    </div>
  );
}

export default App;
