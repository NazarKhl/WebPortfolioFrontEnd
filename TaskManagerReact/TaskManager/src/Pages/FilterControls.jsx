import React from 'react';

function FilterControls({ filter, setFilter, sortOrder, setSortOrder }) {
  return (
    <div className="filter-controls">
      <div className="filter-group">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
      </div>
      <div className="sort-group">
        <button onClick={() => setSortOrder('asc')} className={sortOrder === 'asc' ? 'active' : ''}>Sort Asc</button>
        <button onClick={() => setSortOrder('desc')} className={sortOrder === 'desc' ? 'active' : ''}>Sort Desc</button>
      </div>
    </div>
  );
}

export default FilterControls;
