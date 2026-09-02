import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Edit2, Trash2 } from 'lucide-react';

const CandidateCard = ({ candidate, onToggleShortlist, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '8px',
      padding: '20px',
      border: '1px solid #e5e7eb',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <button 
        onClick={() => onToggleShortlist(candidate.id, candidate.isShortlisted)}
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: candidate.isShortlisted ? '#eab308' : '#9ca3af'
        }}
      >
        <Star size={20} fill={candidate.isShortlisted ? '#eab308' : 'none'} />
      </button>

      <div>
        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>{candidate.name}</h4>
        <p style={{ color: '#2563eb', fontSize: '14px', fontWeight: '500' }}>{candidate.role}</p>
        <p style={{ color: '#6b7280', fontSize: '13px', marginTop: '6px' }}>{candidate.email}</p>
        <p style={{ color: '#6b7280', fontSize: '13px' }}>{candidate.phone}</p>
        
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
          <span style={{
            background: '#e0e7ff',
            color: '#3730a3',
            fontSize: '12px',
            padding: '2px 8px',
            borderRadius: '4px'
          }}>
            {candidate.experience} yrs exp
          </span>
          <span style={{
            background: '#f3f4f6',
            color: '#374151',
            fontSize: '12px',
            padding: '2px 8px',
            borderRadius: '4px'
          }}>
            {candidate.status}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginTop: '18px' }}>
        <button 
          onClick={() => navigate(`/edit-candidate/${candidate.id}`)}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            background: '#f3f4f6',
            border: 'none',
            padding: '6px 0',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '13px'
          }}
        >
          <Edit2 size={14} /> Edit
        </button>
        <button 
          onClick={() => onDelete(candidate.id)}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            background: '#fee2e2',
            color: '#b91c1c',
            border: 'none',
            padding: '6px 0',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '13px'
          }}
        >
          <Trash2 size={14} /> Delete
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;