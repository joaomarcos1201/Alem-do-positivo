import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './componentes/Register';
import Login from './componentes/Login';
import ProductList from './componentes/ProductList';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/Register" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
