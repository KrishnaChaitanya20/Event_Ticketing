// EventsPage.js

import React from 'react';
import './EventsPage.css';

// Placeholder data for events
const events = [
  { id: 1, name: 'Concert' },
  { id: 2, name: 'Sports' },
  { id: 3, name: 'Art Exhibition' },
  { id: 4, name: 'Tech Conference' },
  { id: 5, name: 'Food Festival' },
  { id: 6, name: 'Health Workshop' },
];

const EventsPage = () => {
  return (
    <div>
      <div className="events-grid">
        {events.map(event => (
          <div key={event.id} className="event-card">
            {event.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
