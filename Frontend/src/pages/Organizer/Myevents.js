import React, { useEffect, useState } from 'react';
import './Myevents.css';
import { useLogin } from 'LoginContext';

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const {user,isOrganizer}=useLogin()
  useEffect(()=>{
    if(isOrganizer && user)
    setEvents(user.events_organized)
    },[])
  return (
    <div className="my-events">
      <h2>Events Organized</h2>
      {events.length > 0 ? (
        events.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-image">
              <img src={event.imageUrl} alt={event.name} />
            </div>
            <div className="event-details">
              <h3>{event.name}</h3>
              <p>{new Date(event.date).toLocaleDateString()}</p>
              <p>{event.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No events organized yet.</p>
      )}
    </div>
  );
};

export default MyEvents;
