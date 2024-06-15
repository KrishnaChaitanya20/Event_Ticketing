// SortFilter.js

import React from 'react';
import './SortFilter.css';

const SortFilter = () => {
  return (
    <div className="sort-filter">
      <div className="sort">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort">
          <option value="date">Date</option>
          <option value="popularity">Popularity</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div className="filter">
        <label htmlFor="category">Filter by category:</label>
        <select id="category">
          <option value="all">All</option>
          <option value="music">Music</option>
          <option value="sports">Sports</option>
          <option value="art">Art</option>
          <option value="technology">Technology</option>
          <option value="food">Food & Drink</option>
          <option value="health">Health</option>
        </select>
      </div>
    </div>
  );
}

export default SortFilter;
