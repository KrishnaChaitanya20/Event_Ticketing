import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Addevent.css';

const AddEvent = () => {
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventDescription: '',
    eventCategory: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    venueName: '',
    venueAddress: '',
    venueCapacity: '',
    seatingArrangement: '',
    organizerName: '',
    organizerContact: '',
    organizerBio: '',
    ticketTypes: '',
    ticketPrices: '',
    ticketAvailability: '',
    ticketSaleDates: '',
    eventImage: '',
    eventLogo: '',
    promotionalVideos: '',
    socialMediaLinks: '',
    eventSchedule: '',
    guestSpeakers: '',
    sponsors: '',
    accessibilityInfo: '',
    ageRestrictions: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: files[0] // Assuming single file upload, you can adjust for multiple files
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, like sending the data to a server
    console.log('Event Details:', eventDetails);
    navigate('/events');
  };

  return (
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
            Event Category:
            <select name="eventCategory" value={eventDetails.eventCategory} onChange={handleChange}>
              <option value="">Select Category</option>
              <option value="Music">Music</option>
              <option value="Sports">Sports</option>
              <option value="Education">Education</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
            </select>
          </label>
        </section>

        <section>
          <h2>Date and Time</h2>
          <label>
            Event Date:
            <input type="date" name="eventDate" value={eventDetails.eventDate} onChange={handleChange} />
          </label>
          <label>
            Start Time:
            <input type="time" name="startTime" value={eventDetails.startTime} onChange={handleChange} />
          </label>
          <label>
            End Time:
            <input type="time" name="endTime" value={eventDetails.endTime} onChange={handleChange} />
          </label>
        </section>

        <section>
          <h2>Venue Information</h2>
          <label>
            Venue Name:
            <input type="text" name="venueName" value={eventDetails.venueName} onChange={handleChange} />
          </label>
          <label>
            Venue Address:
            <input type="text" name="venueAddress" value={eventDetails.venueAddress} onChange={handleChange} />
          </label>
          <label>
            Venue Capacity:
            <input type="number" name="venueCapacity" value={eventDetails.venueCapacity} onChange={handleChange} />
          </label>
          <label>
            Seating Arrangement:
            <input type="text" name="seatingArrangement" value={eventDetails.seatingArrangement} onChange={handleChange} />
          </label>
        </section>

        <section>
          <h2>Organizer Information</h2>
          <label>
            Organizer Name:
            <input type="text" name="organizerName" value={eventDetails.organizerName} onChange={handleChange} />
          </label>
          <label>
            Organizer Contact Information:
            <input type="text" name="organizerContact" value={eventDetails.organizerContact} onChange={handleChange} />
          </label>
          <label>
            Organizer Bio:
            <textarea name="organizerBio" value={eventDetails.organizerBio} onChange={handleChange} />
          </label>
        </section>

        <section>
          <h2>Ticket Information</h2>
          <label>
            Ticket Types:
            <input type="text" name="ticketTypes" value={eventDetails.ticketTypes} onChange={handleChange} />
          </label>
          <label>
            Ticket Prices:
            <input type="text" name="ticketPrices" value={eventDetails.ticketPrices} onChange={handleChange} />
          </label>
          <label>
            Ticket Availability:
            <input type="number" name="ticketAvailability" value={eventDetails.ticketAvailability} onChange={handleChange} />
          </label>
          <label>
            Ticket Sale Dates:
            <input type="text" name="ticketSaleDates" value={eventDetails.ticketSaleDates} onChange={handleChange} />
          </label>
        </section>

        <section>
          <h2>Media and Marketing</h2>
          <label>
            Event Image:
            <input type="file" name="eventImage" onChange={handleFileChange} />
          </label>
          <label>
            Event Logo:
            <input type="file" name="eventLogo" onChange={handleFileChange} />
          </label>
          <label>
            Promotional Videos:
            <input type="file" name="promotionalVideos" onChange={handleFileChange} />
          </label>
          <label>
            Social Media Links:
            <input type="file" name="socialMediaLinks" onChange={handleFileChange} />
          </label>
        </section>

        <section>
          <h2>Additional Details</h2>
          <label>
            Event Schedule:
            <textarea name="eventSchedule" value={eventDetails.eventSchedule} onChange={handleChange} />
          </label>
          <label>
            Guest Speakers/Performers:
            <textarea name="guestSpeakers" value={eventDetails.guestSpeakers} onChange={handleChange} />
          </label>
          <label>
            Sponsors:
            <textarea name="sponsors" value={eventDetails.sponsors} onChange={handleChange} />
          </label>
          <label>
            Accessibility Information:
            <textarea name="accessibilityInfo" value={eventDetails.accessibilityInfo} onChange={handleChange} />
          </label>
          <label>
            Age Restrictions:
            <input type="text" name="ageRestrictions" value={eventDetails.ageRestrictions} onChange={handleChange} />
          </label>
        </section>

        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
