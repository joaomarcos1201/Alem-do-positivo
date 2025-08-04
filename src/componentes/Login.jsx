import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer a validação e enviar para o backend
    console.log('Login enviado', formData);
  };

  return (
    <div className="form-container">
      <h2>Login de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
