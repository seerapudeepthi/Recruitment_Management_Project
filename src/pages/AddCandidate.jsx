import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCandidate } from '../services/api';

const AddCandidate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Frontend Developer',
    status: 'Applied',
    experience: 0,
    isShortlisted: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCandidate(formData);
      navigate('/candidates');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-card" style={{ margin: '0 auto' }}>
      <h2 style={{ marginBottom: '16px' }}>Add Candidate</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input required type="text" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })}>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Backend Developer">Backend Developer</option>
          </select>
        </div>
        <div className="form-group">
          <label>Status</label>
          <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })}>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Hired">Hired</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div className="form-group">
          <label>Experience (Years)</label>
          <input type="number" min="0" value={formData.experience} onChange={e => setFormData({ ...formData, experience: Number(e.target.value) })} />
        </div>
        <button type="submit" className="btn-primary" style={{ width: '100%' }}>Add Candidate</button>
      </form>
    </div>
  );
};

export default AddCandidate;