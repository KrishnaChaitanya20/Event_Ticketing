import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import config from 'config';
import './Loginbody.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // console.log(username,email,password);
    // console.log(config.apiBaseUrl+'/addUser');
    const response = await fetch(config.apiBaseUrl+'/users/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({"name": username , email , password })
    });

    const data = await response.json();
    alert(data.message);
    navigate('/login');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>

        <label htmlFor="signupUsername">Username:</label>
        <input
          type="text"
          id="signupusername"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="signupEmail">Email:</label>
        <input
          type="email"
          id="signupEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label htmlFor="signupPassword">Create Password:</label>
        <input
          type="password"
          id="signupPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirmPassword">Re-enter Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Signup</button>
      </form>
      <div className="link">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Signup;
