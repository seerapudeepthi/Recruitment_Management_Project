import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { registerUser, getUsers } from '../services/api';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await getUsers();
      if (res.data.some(u => u.email === email)) {
        setError('User already exists');
        return;
      }
      const newUser = { name, email, password };
      const created = await registerUser(newUser);
      login(created.data);
      navigate('/dashboard');
    } catch {
      setError('Failed to register');
    }
  };

  return (
    <div className="form-card">
      <h2 style={{ marginBottom: '16px', textAlign: 'center' }}>Create Account</h2>
      {error && <p style={{ color: '#ef4444', fontSize: '13px', marginBottom: '12px' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn-primary" style={{ width: '100%' }}>Sign Up</button>
      </form>
      <p style={{ marginTop: '16px', fontSize: '13px', textAlign: 'center' }}>
        Already registered? <Link to="/login" style={{ color: '#2563eb' }}>Login</Link>
      </p>
    </div>
  );
};

export default Signup;