import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Star, UserPlus } from 'lucide-react';

const Sidebar = () => {
  const linkStyle = ({ isActive }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 14px',
    borderRadius: '6px',
    textDecoration: 'none',
    color: isActive ? '#2563eb' : '#4b5563',
    backgroundColor: isActive ? '#eff6ff' : 'transparent',
    fontWeight: isActive ? '600' : '400',
  });

  return (
    <aside className="sidebar-container">
      <h2 className="sidebar-brand">RecruitEase</h2>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" style={linkStyle}>
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>
        <NavLink to="/candidates" style={linkStyle}>
          <Users size={18} /> Candidates
        </NavLink>
        <NavLink to="/add-candidate" style={linkStyle}>
          <UserPlus size={18} /> Add Candidate
        </NavLink>
        <NavLink to="/shortlisted" style={linkStyle}>
          <Star size={18} /> Shortlisted
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;