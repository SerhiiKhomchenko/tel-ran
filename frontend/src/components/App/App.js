import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css' 

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Catalog from "../Header/Catalog/Catalog";
import Category from '../Header/Catalog/Category/Category';
import MainPage from '../Header/MainPage/MainPage';
import Allproducts from '../Header/Allproducts/Allproducts';
import Product from "../Header/Product/Product";
import NotFound from "../notFound/notFound";
import Card from "../Header/Card/Card";
import Allsalles from "../Header/Allsalles/Allsalles";


function App() {
  return (
    <div>
       <Router>
        <Header/>
        <Routes>
        <Route path='Catalog' element={<Catalog/>}/>
        <Route path='categories/:id' element={<Category/>}/>
        <Route path='/' element ={<MainPage/>}/>
        <Route path='Allproducts' element={<Allproducts/>}/>
        <Route path='Allsalles' element={<Allsalles/>}/>
        <Route path='products/:id' element={<Product/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path="Card" element={<Card/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
