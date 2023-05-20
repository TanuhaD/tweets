import React, { useState } from 'react';

const Filter = ({ filtered, setFiltered }) => {
  const handleFilterChange = e => {
    setFiltered(e.target.value);
  };

  return (
    <div>
      <select value={filtered} onChange={handleFilterChange}>
        <option value={'show all'}>show all</option>
        <option value={'follow'}>follow</option>
        <option value={'following'}>following</option>
      </select>
    </div>
  );
};

export default Filter;
