import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Eventsbody.css';
import images from 'util/category';

// Placeholder data for events with a placeholder image


const Eventsbody = () => {
  const [searchParams] = useSearchParams();
  const [events, setEvents] = React.useState([]);
  useEffect(() => {
    const search=searchParams.get('search');
    const getEvents = async () => {
      try {
        if (search)
          var url = `http://localhost:5000/events?search=${search}`;
        else
          var url = 'http://localhost:5000/events';

        const response = await fetch(url);
        const data = await response.json();
        console.log(data.events);
        setEvents(data.events);
      } catch (error) {
        console.error(error);
      }
    };
    getEvents();
  }, [searchParams]);

  return (
    <div className='events-container'>
      <div className="events-grid">
        {events.map((event, index) => (
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
