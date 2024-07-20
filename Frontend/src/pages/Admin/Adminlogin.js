// AdminLogin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Adminlogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Admin Login</h2>
          <label htmlFor="adminLoginEmail">Email:</label>
          <input
            type="email"
            id="adminLoginEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="adminLoginPassword">Password:</label>
          <input
            type="password"
            id="adminLoginPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="link">
          Go back to <Link to="/login">User Login</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
