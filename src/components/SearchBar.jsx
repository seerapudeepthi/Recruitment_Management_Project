import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      background: '#ffffff',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      padding: '6px 12px',
      width: '260px'
    }}>
      <Search size={16} color="#9ca3af" />
      <input
        type="text"
        placeholder="Search candidate or role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          border: 'none',
          outline: 'none',
          marginLeft: '8px',
          width: '100%',
          fontSize: '14px'
        }}
      />
    </div>
  );
};

export default SearchBar;