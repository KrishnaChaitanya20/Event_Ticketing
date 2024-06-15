import React from 'react';
import './Body.css';

const events = [
  {
    id: 1,
    title: "Event 1",
    date: "June 20, 2024",
    description: "Description for Event 1",
  },
  {
    id: 2,
    title: "Event 2",
    date: "July 15, 2024",
    description: "Description for Event 2",
  },
  {
    id: 3,
    title: "Event 3",
    date: "August 10, 2024",
    description: "Description for Event 3",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-image">
              <img src={`https://via.placeholder.com/150?text=${event.title}`} alt={event.title} />
            </div>
            <div className="event-details">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
