// import React, { useEffect,useState } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './EventBody.css'
import image from 'images/logo.png'

const EventBody = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [event, setEvent] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // console.log('API_BASE_URL:', process.env.REACT_APP_API_BASE_URL);
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/events/find/${id}`);
                const data = await response.json();
                console.log(data);
                if(data.image === "default") data.image = image;
                setEvent(data);
                return data;
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);

    const handleBook = () => {
        navigate(`/bookings/${id}`);
    }

  return (
    <>
    {event ?
        <div className='event-container'>
            <div className="event-share">
                <div>
                    <div className="event-name" >{event.name}</div>
                    <div className="event-category">{event.category}</div>
                </div>
                <div className="share">Share</div>
            </div>
            <div className='venue'>
                <div className="event-date">{event.date}</div>
                <div className="event-time">{event.time}</div>
                <div className="event-location">{event.location}</div>
            </div>
            <img className="eventimage" src={event.image} alt="Event" />

            <div className="event-description">
                {event.description}
            </div>
            {event.organizerdetails ?
                <div className="event-organizer">
                    <div className="organizer">Organizer Details</div>
                    <div className="details">
                        <div className="organizer-name">
                            <span>Organizer name: </span>
                            {event.organizerdetails.name}
                        </div>
                        <div className="organizer-email">
                            <span>Organizer email: </span>
                            {event.organizerdetails.email}
                        </div>
                    </div>
                </div>
            : null}
            <input type="button" onClick={()=>handleBook()} value="Book Now" className="booknow" />
        </div>
        : <div className='loading'>Loading...</div>
    }
    </>
  )
}

export default EventBody
