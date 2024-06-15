// EventsByCategories.js

import React from 'react';
import './Categories.css';

const categories = [
  { id: 1, name: 'Music' },
  { id: 2, name: 'Sports' },
  { id: 3, name: 'Art' },
  { id: 4, name: 'Technology' },
  { id: 5, name: 'Food & Drink' },
  { id: 6, name: 'Health' },
];

const EventsByCategories = () => {
  return (
    <div className="container">
      <div className="header-box">
        <h2>Events by Categories</h2>
      </div>
      <div className="categories-container">
        {categories.map((category) => (
          <div key={category.id} className="card">
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsByCategories;
