import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useLogin } from 'LoginContext';
import './Loginbody.css';

const Login = () => {
  const {user,setUser}=useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(process.env.REACT_APP_API_BASE_URL+'/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data);
    if (data.error) {
      alert(data.error);
    } else {
      setUser(data);
      navigate('/');
    }
  }

  return (
    <div className="container">
      <div className="admin-login">
        <Link to="/adminlogin">Admin Login</Link>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="loginEmail">Email:</label>
          <input
            type="email"
            id="loginEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="loginPassword">Password:</label>
          <input
            type="password"
            id="loginPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="link">
          New user? <Link to="/signup"> Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
