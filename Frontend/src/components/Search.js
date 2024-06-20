import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';
import searchlogo from 'images/searchlogo.png';

const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    if(search === "") 
      navigate('/events');
    navigate(`/events?search=${search}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className="search-container">
      <img src={searchlogo} alt="Search Icon" className="search-icon" />
      <input
        type="text"
        placeholder="Events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={handleKeyPress}
        className="search-input"
      />
    </div>
  );
};

export default Search;