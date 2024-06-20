// EventsPage.js

import React from 'react';
import './Eventsbody.css';
import images from 'util/category';

// Placeholder data for events with a placeholder image
const events = [
  { id: 1, name: 'Concert', image: images.arts },
  { id: 2, name: 'Sports', image: images.concert },
  { id: 3, name: 'Art Exhibition', image: images.food },
  { id: 4, name: 'Tech Conference', image: images.temp_health },
  { id: 5, name: 'Food Festival', image: images.sport },
  { id: 6, name: 'Health Workshop', image: images.tech },
];

const Eventsbody = () => {
  return (
    <div className='events-container'>
      <div className="events-grid">
        {events.map((event,index) => (
          <div
            key={index}
            className="event-card"
            style={{ backgroundImage: `url(${event.image})` }}
          >
            <div className="event-info">{event.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eventsbody;
