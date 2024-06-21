import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import './Bookingdetails.css';
import { useLogin } from 'LoginContext';

const BookingDetails = () => {
  const {eventid}=useParams()
  const {user}=useLogin()
  const navigate=useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numTickets, setNumTickets] = useState(1);

  useEffect(() => {
    console.log(user);
    if(!user.name){
      // Redirect to login page
      navigate('/login');
    }
  }, []);

  const event={
    id:eventid,
    name:"Concert",
    date:"2022-12-12",
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with actual booking logic
    // alert(`Booked ${numTickets} tickets for ${event.name}`);
  };

  return (
    <div className="booking-container">
      <h2>Booking Details for {event.name}</h2>
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
