import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Myevents.css';
import { useLogin } from 'LoginContext';
import Navbar from 'components/Navbar';


const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const {user,isOrganizer}=useLogin()
  const navigate=useNavigate()
  useEffect(()=>{
    if(isOrganizer && user)
    setEvents(user.events_organized)
    },[])

  const handleClick = () => {
    navigate('/organizer/addevent');    
  };
  return (
    <>
    <Navbar/>
    <div className="my-events">
      <h2>Events Organized</h2>
      <button className="add-event" onClick={handleClick}>Add Event</button>
      
      <div className="myevents-grid">
        {events.length > 0 ? (
          events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.imageUrl} alt={event.name} />
              </div>
              <div className="event-details">
                <h3>{event.name}</h3>
                <p>{new Date(event.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                <p>{event.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No events organized yet.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default MyEvents;
