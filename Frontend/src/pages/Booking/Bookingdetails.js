import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useLogin } from 'LoginContext';
import geteventbyid from 'util/EventById'
import './Bookingdetails.css';

const BookingDetails = () => {
  const {eventid}=useParams()
  const [event, setEvent] = useState({'name':"Event"})
  const {user}=useLogin()
  const navigate=useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numTickets, setNumTickets] = useState(1);


  useEffect(() => {
    if(!user.name){
      navigate('/login');
    }
    else{
      const fetchData = async () => {
        const data=await geteventbyid(eventid);
        setEvent(data);
      };
      fetchData();
    }
  }, []);

  

  const event1={
    id:eventid,
    name:"Concert",
    date:"2022-12-12",
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Booking Confirmed for ${numTickets} tickets`);
    navigate(`/`);
  };

  return (
    <div className="booking-container">
      <h2>Booking Details for {event?.name}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Number of Tickets:
          <input
            type="number"
            value={numTickets}
            min="1"
            onChange={(e) => setNumTickets(e.target.value)}
            required
          />
        </label>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingDetails;
