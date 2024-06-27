import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './Eventsbody.css';

const Eventsbody = () => {
  const [searchParams] = useSearchParams();
  const [events, setEvents] = React.useState([]);
  useEffect(() => {
    const search=searchParams.get('search');
    const type=searchParams.get('type');
    const getEvents = async () => {
      try {
        if (search)
          var url = `http://localhost:5000/events?search=${search}`;
        else if (type)
          var url = `http://localhost:5000/events?category=${type}`;
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
          <Link key={index} className='card-click' to={`/events/${event.id}`}>
          <div
            className="event-card"
            style={{ backgroundImage: `url(${event.image})` }}
          >
            <div className="event-info">{event.name}</div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Eventsbody;
