import React, { useEffect, useState } from 'react';
import { getCandidates } from '../services/api';
import { Users, Star, UserCheck, Clock } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({ total: 0, shortlisted: 0, hired: 0, interview: 0 });

  useEffect(() => {
    getCandidates().then(res => {
      const data = res.data;
      setStats({
        total: data.length,
        shortlisted: data.filter(c => c.isShortlisted).length,
        hired: data.filter(c => c.status === 'Hired').length,
        interview: data.filter(c => c.status === 'Interview').length
      });
    }).catch(console.error);
  }, []);

  const cardStyle = {
    background: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  };

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Hiring Overview</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <div style={cardStyle}>
          <Users size={32} color="#2563eb" />
          <div>
            <p style={{ color: '#6b7280', fontSize: '13px' }}>Total Candidates</p>
            <h3 style={{ fontSize: '24px' }}>{stats.total}</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <Star size={32} color="#eab308" />
          <div>
            <p style={{ color: '#6b7280', fontSize: '13px' }}>Shortlisted</p>
            <h3 style={{ fontSize: '24px' }}>{stats.shortlisted}</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <Clock size={32} color="#6366f1" />
          <div>
            <p style={{ color: '#6b7280', fontSize: '13px' }}>In Interview</p>
            <h3 style={{ fontSize: '24px' }}>{stats.interview}</h3>
          </div>
        </div>
        <div style={cardStyle}>
          <UserCheck size={32} color="#16a34a" />
          <div>
            <p style={{ color: '#6b7280', fontSize: '13px' }}>Hired</p>
            <h3 style={{ fontSize: '24px' }}>{stats.hired}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;