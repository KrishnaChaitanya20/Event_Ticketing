import React from 'react';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import upcomming from 'util/upcommingEvent';
import './Body.css';

const events1 = [
  {
    id: 1,
    title: "Event 1",
    date: "June 20, 2024",
    image: 'default',
    description: "Description for Event 1",
  },
  {
    id: 2,
    title: "Event 2",
    date: "July 15, 2024",
    image: 'default',
    description: "Description for Event 2",
  },
  {
    id: 3,
    title: "Event 3",
    date: "August 10, 2024",
    image: 'default', 
    description: "Description for Event 3",
  },
];

const UpcomingEvents = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState(events1);
  useEffect(() => {
    // console.log("Fetching Upcoming Events");
    (async () => {
      const data = await upcomming();
      // console.log(data);
      // console.log('Async function called!');
      setEvents(data.events);
    })();
  }, []);

  const handleClick = (id) => {
    navigate(`/events/${id}`);
  }

  return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card" onClick={()=>handleClick(event.id)}>
            <div className="event-image">
            {
              event.image==='default'?
              <img src={`https://via.placeholder.com/150?text=${event.name}`} alt={event.name} />
              // :<img src={`https://via.placeholder.com/150?text=${event.name}`} alt={event.name} />
              :<img className="eventimage" src={'data:image/'+event.image_ext+';base64,'+event.image} alt="Event" />
            }
            </div>
            <div className="event-details">
              <h3>{event.name}</h3>
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
