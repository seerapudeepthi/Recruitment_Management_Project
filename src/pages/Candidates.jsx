<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
  <h2>Candidate Profiles</h2>
  <div className="search-filter-wrapper" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <SearchBar search={search} setSearch={setSearch} />
    <FilterBar
      roleFilter={roleFilter}
      setRoleFilter={setRoleFilter}
      statusFilter={statusFilter}
      setStatusFilter={setStatusFilter}
    />
  </div>
</div>