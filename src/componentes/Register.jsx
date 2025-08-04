import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
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
    console.log('Cadastro enviado', formData);
  };

  return (
    <div className="form-container">
      <h2>Cadastro de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome Completo" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Telefone" value={formData.phone} onChange={handleChange} required />
        <textarea name="address" placeholder="Endereço" value={formData.address} onChange={handleChange} required></textarea>
        <input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirmar Senha" value={formData.confirmPassword} onChange={handleChange} required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;