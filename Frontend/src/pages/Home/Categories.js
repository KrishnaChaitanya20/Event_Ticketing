// EventsByCategories.js

import React from 'react';
import './Categories.css';
import images from 'util/category';
import { useNavigate } from 'react-router-dom';


const EventsByCategories = () => {
  const categories = [
    { id: 1, name: 'Concert' , image: images.concert },
    { id: 2, name: 'Sports' , image: images.sport},
    { id: 3, name: 'Art' , image: images.arts },
    { id: 4, name: 'Technology' , image: images.tech},
    { id: 5, name: 'Food' , image: images.food},
    { id: 6, name: 'Health', image: images.health},
  ];

  const navigate =useNavigate();
  const handleClick = (category) => {
    navigate(`/events?type=${category}`);
  };
  
  return (
    <div className="container">
      <div className="header-box">
        <h2>Events by Categories</h2>
      </div>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div key={index} className="card" style={{ backgroundImage: `url(${category.image})`  }} onClick={()=>handleClick(category.name)}>
            <div className= "card-content">
              { (category.name==="Food") ? "Food & Drink" : category.name}  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsByCategories;
