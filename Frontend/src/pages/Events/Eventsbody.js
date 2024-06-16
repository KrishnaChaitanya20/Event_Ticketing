// EventsPage.js

import React from 'react';
import './Eventsbody.css';

// Placeholder data for events with a placeholder image
const events = [
  { id: 1, name: 'Concert', image: '/path/to/your/image1.jpg' },
  { id: 2, name: 'Sports', image: '/path/to/your/image2.jpg' },
  { id: 3, name: 'Art Exhibition', image: '/path/to/your/image3.jpg' },
  { id: 4, name: 'Tech Conference', image: '/path/to/your/image4.jpg' },
  { id: 5, name: 'Food Festival', image: '/path/to/your/image5.jpg' },
  { id: 6, name: 'Health Workshop', image: '/path/to/your/image6.jpg' },
];

const Eventsbody = () => {
  return (
    <div className='container'>
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
