// Importamos react
import React from 'react';

// Importamos las librerias fundamentales
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Importamos los elementos necesarios y componentes
import './index.css';
import Navbar from './components/Navbar';


// Importamos las vistas a renderizar
import App from './App';
import Home from './views/Home';
import Carrito from './views/Carrito';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/login" element={<App />} />
      <Route path="/register" element={<App />} />
    </Routes>
    <p>footer</p>
  </BrowserRouter>
);