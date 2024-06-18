// import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import './EventBody.css'
import image from '../../images/logo.png'

const EventBody = () => {
    const { id } = useParams()
    const event = {
        name: 'Sample Event',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: '2022-12-31',
        time: '18:00',
        /* 
            Street:  B 203, Shreysh Indl Est, Jay Coach, Goregaon( East)
            City:   Mumbai
            State/province/area:    Maharashtra
            Phone number:  02226854850
            Zip code:  400063
            Country calling code:  +91
            Country:  India
        */
        location: 'B 203, Shreysh Indl Est, Jay Coach, Goregaon( East), Mumbai, Maharashtra, 400063, India',
        image: image,
        category: 'Sample Category',
        organizerdetails: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '1234567890'
        }
    };

    // const [event, setEvent] = useState({
    //     name: '',
    //     description: '',
    //     date: '',
    //     time: '',
    //     location: '',
    //     image: '',
    //     category: '',
    //     organizerdetails: {
    //         name: '',
    //         email: '',
    //         phone: ''
    //     }
    // });

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             console.log('API_BASE_URL:', process.env.REACT_APP_API_BASE_URL);
    //             const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/events/${id}`);
    //             const data = await response.json();
    //             console.log(data);
    //             setEvent(data);
    //             return data;
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchData();
    // }, [id]);

  return (
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
                <div className="organizer-phone">
                    <span>Organizer phone: </span>
                    {event.organizerdetails.phone}
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventBody
