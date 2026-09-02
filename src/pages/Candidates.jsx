import React, { useState, useEffect } from 'react';
import { getCandidates, deleteCandidate, patchCandidate } from '../services/api';
import CandidateCard from '../components/CandidateCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const loadCandidates = async () => {
    try {
      const res = await getCandidates();
      setCandidates(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadCandidates();
  }, []);

  const handleToggleShortlist = async (id, currentStatus) => {
    try {
      await patchCandidate(id, { isShortlisted: !currentStatus });
      setCandidates(prev =>
        prev.map(c => (c.id === id ? { ...c, isShortlisted: !currentStatus } : c))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this candidate?')) {
      try {
        await deleteCandidate(id);
        setCandidates(prev => prev.filter(c => c.id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const filteredCandidates = candidates.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
                          c.role.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter ? c.role === roleFilter : true;
    const matchesStatus = statusFilter ? c.status === statusFilter : true;
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <h2>Candidate Profiles</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <SearchBar search={search} setSearch={setSearch} />
          <FilterBar
            roleFilter={roleFilter}
            setRoleFilter={setRoleFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
        </div>
      </div>

      <div className="grid-cards">
        {filteredCandidates.map(candidate => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            onToggleShortlist={handleToggleShortlist}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {filteredCandidates.length === 0 && (
        <p style={{ marginTop: '30px', color: '#6b7280' }}>No candidates found matching the criteria.</p>
      )}
    </div>
  );
};

export default Candidates;