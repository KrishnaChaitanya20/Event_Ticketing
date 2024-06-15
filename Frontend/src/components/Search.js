import React from 'react';
import './Search.css';
import searchlogo from 'images/searchlogo.png';

const Search = () => {
  return (
    <div className="search-container">
      <img src={searchlogo} alt="Search Icon" className="search-icon" />
      <input type="text" placeholder="Events..." className="search-input" />
    </div>
  );
}

export default Search;