import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from './landing_page/signup/signup';
import ProductsPage from './landing_page/products/ProductsPage';
import SupportPage from './landing_page/supoort/SupportPage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Notfound from './landing_page/Notfound';
// import SupportPage from './landing_page/support/SupportPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Navbar></Navbar>
 <Routes>
  
  <Route path='/' element={<HomePage></HomePage>}></Route>
  <Route path='/signup' element={<Signup></Signup>}></Route>
  <Route path='/about' element={<AboutPage></AboutPage>}></Route>
  <Route path='/products' element={<ProductsPage></ProductsPage>}></Route>
   <Route path='/pricing' element={<PricingPage></PricingPage>}></Route>
  <Route path='/support' element={<SupportPage></SupportPage>}></Route>
  <Route path='*' element={<Notfound></Notfound>}></Route>
  
  
 </Routes>
  <Footer></Footer>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

