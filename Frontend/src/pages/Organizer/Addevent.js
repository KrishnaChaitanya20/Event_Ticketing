import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from 'components/Navbar';
import addeventCode  from 'util/AddeventFunc';
import './Addevent.css';

const AddEvent = () => {
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventDescription: '',
    eventCategory: '',
    eventDate: '',
    capacity: 0,
    entry_fee: 0,
    location:{
                venueName: '',
                venueAddress: '',
              },
    organizerDetails:{
                organizerName: '',
                organizerContact: '',
              },
    eventImage: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "venueName" || name === "venueAddress") {
    setEventDetails({
      ...eventDetails,
      location: {
        ...eventDetails.location,
        [name]: value,
      },
    });
  } else if (name === "organizerName" || name === "organizerContact") {
    // Handle updates to organizerDetails
    setEventDetails({
      ...eventDetails,
      organizerDetails: {
        ...eventDetails.organizerDetails,
        [name]: value,
      },
    });
  } else {
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  }
};

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('eventImage', eventDetails.eventImage);
  
    if (eventDetails && typeof eventDetails === 'object') {
      Object.keys(eventDetails).forEach(key => {
        if (key === 'location') {
          formData.append('venueName', eventDetails.location.venueName);
          formData.append('venueAddress', eventDetails.location.venueAddress);
        } else if (key === 'organizerDetails') {
          formData.append('organizerName', eventDetails.organizerDetails.organizerName);
          formData.append('organizerContact', eventDetails.organizerDetails.organizerContact);
        }
        else {
          formData.append(key, eventDetails[key]);
        }
      });
    }
    const addevent = async () => {
      try {
      const status = await addeventCode(formData);
      console.log(status);
      if (status === 200) {
        alert("Event Added Successfully");
        console.log("Event Added Successfully");
      }
      navigate('/events');
      } catch (error) {
      console.error(error);
      }
    };
    addevent();
  };

  return (
    <>
    <Navbar />
    <div className="add-event-container">
      <h1>Add New Event</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <h2>Event Details</h2>
          <label>
            Event Name:
            <input type="text" name="eventName" value={eventDetails.eventName} onChange={handleChange} />
          </label>
          <label>
            Event Description:
            <textarea name="eventDescription" value={eventDetails.eventDescription} onChange={handleChange} />
          </label>
          <label>
            Entry Fee:
            <input type="number" name="entry_fee" value={eventDetails.entry_fee} onChange={handleChange} />
          </label>
          <label>
            Event Category:
            <select name="eventCategory" value={eventDetails.eventCategory} onChange={handleChange}>
              <option value="">Select Category</option>
              <option value="Art">Art</option>
              <option value="Music">Music</option>
              <option value="Food">Food</option>
              <option value="Sports">Sports</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
            </select>
          </label>
        </section>

        <section>
          <h2>Event Image</h2>
          <label>
            Event Image:
            <input type="file" name="eventImage" onChange={handleFileChange} />
          </label>
        </section>

        <section>
          <h2>Date</h2>
          <label>
            Event Date:
            <input type="date" name="eventDate" value={eventDetails.eventDate} onChange={handleChange} />
          </label>
        </section>

        <section>
          <h2>Venue Information</h2>
          <label>
            Venue Name:
            <input type="text" name="venueName" value={eventDetails.location.venueName} onChange={handleChange} />
          </label>
          <label>
            Venue Address:
            <input type="text" name="venueAddress" value={eventDetails.location.venueAddress} onChange={handleChange} />
          </label>
          <label>
            Venue Capacity:
            <input type="number" name="capacity" value={eventDetails.capacity} onChange={handleChange} />
          </label>
        </section>

        <section>
          <h2>Organizer Information</h2>
          <label>
            Organizer Name:
            <input type="text" name="organizerName" value={eventDetails.organizerDetails.organizerName} onChange={handleChange} />
          </label>
          <label>
            Organizer Contact Information:
            <input type="text" name="organizerContact" value={eventDetails.organizerDetails.organizerContact} onChange={handleChange} />
          </label>
        </section>

        <button type="submit">Add Event</button>
      </form>
    </div>
    </>
  );
};

export default AddEvent;
