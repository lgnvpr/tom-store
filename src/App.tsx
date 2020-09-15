import React from 'react';
import "./bootstrap.css";
import "./all.js";
import './App.css';
import Home from './containers/Home';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Route, Router } from "react-router-dom";
import DetailProduct from './containers/DetailProduct';
import EditInfoCustom from './containers/EditInfoCustom';
import Cart from './containers/Cart';
import AboutUs from './containers/AboutUs';
import EditProduct from './containers/EditProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" exact component = {EditProduct} />
      <Route path="/ahihi" exact component = {AboutUs} />
      <Route path="/blog" component = {Home}/>
      <Route path="/product" component = {DetailProduct}/>
      <Route path="/tutorial" component = {EditInfoCustom}/>
      <Route path="/introduce" component = {Cart}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
