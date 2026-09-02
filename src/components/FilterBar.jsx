import React from 'react';

const FilterBar = ({ roleFilter, setRoleFilter, statusFilter, setStatusFilter }) => {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <select 
        value={roleFilter} 
        onChange={(e) => setRoleFilter(e.target.value)}
        style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #d1d5db', outline: 'none' }}
      >
        <option value="">All Roles</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
        <option value="Backend Developer">Backend Developer</option>
      </select>

      <select 
        value={statusFilter} 
        onChange={(e) => setStatusFilter(e.target.value)}
        style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #d1d5db', outline: 'none' }}
      >
        <option value="">All Statuses</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Hired">Hired</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default FilterBar;