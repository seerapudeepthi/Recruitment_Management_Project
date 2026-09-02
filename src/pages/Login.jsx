import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getUsers } from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await getUsers();
      const existingUser = res.data.find(u => u.email === email && u.password === password);
      if (existingUser) {
        login(existingUser);
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch {
      setError('Connection to backend failed');
    }
  };

  return (
    <div className="form-card">
      <h2 style={{ marginBottom: '16px', textAlign: 'center' }}>Recruitment Login</h2>
      {error && <p style={{ color: '#ef4444', fontSize: '13px', marginBottom: '12px' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn-primary" style={{ width: '100%' }}>Login</button>
      </form>
      <p style={{ marginTop: '16px', fontSize: '13px', textAlign: 'center' }}>
        Don't have an account? <Link to="/signup" style={{ color: '#2563eb' }}>Sign up</Link>
      </p>
    </div>
  );
};

export default Login;