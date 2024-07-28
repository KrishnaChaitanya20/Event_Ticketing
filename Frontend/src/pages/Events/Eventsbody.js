import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './Eventsbody.css';
import config from 'config';

const Eventsbody = () => {
  const [searchParams] = useSearchParams();
  const [events, setEvents] = React.useState([]);
  useEffect(() => {
    const search=searchParams.get('search');
    const type=searchParams.get('type');
    const getEvents = async () => {
      const base_url=config.apiBaseUrl;
      try {
        if (search)
          var url = `${base_url}/events?search=${search}`;
        else if (type)
          var url = `${base_url}/events?category=${type}`;
        else
          var url = `${base_url}/events`;

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
            style={{
              backgroundImage: event.image === 'default'
                ? `url(https://via.placeholder.com/150?text=${event.name})`
                : `url(data:image/${event.image_ext};base64,${event.image})`
            }}
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
