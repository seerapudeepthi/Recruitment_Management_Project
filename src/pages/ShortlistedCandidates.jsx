import React, { useState, useEffect } from 'react';
import { getCandidates, deleteCandidate, patchCandidate } from '../services/api';
import CandidateCard from '../components/CandidateCard';

const ShortlistedCandidates = () => {
  const [candidates, setCandidates] = useState([]);

  const loadShortlisted = async () => {
    try {
      const res = await getCandidates();
      setCandidates(res.data.filter(c => c.isShortlisted));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadShortlisted();
  }, []);

  const handleToggleShortlist = async (id, currentStatus) => {
    try {
      await patchCandidate(id, { isShortlisted: !currentStatus });
      setCandidates(prev => prev.filter(c => c.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this candidate?')) {
      try {
        await deleteCandidate(id);
        setCandidates(prev => prev.filter(c => c.id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <h2>Shortlisted Candidates ({candidates.length})</h2>
      <div className="grid-cards">
        {candidates.map(candidate => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            onToggleShortlist={handleToggleShortlist}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {candidates.length === 0 && (
        <p style={{ marginTop: '20px', color: '#6b7280' }}>No candidates have been shortlisted yet.</p>
      )}
    </div>
  );
};

export default ShortlistedCandidates;