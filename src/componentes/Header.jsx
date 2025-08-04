import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Além do Positivo</h1>
      <nav>
        <Link to="/">Produtos</Link>
        <Link to="/cadastro">Cadastrar-se</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
