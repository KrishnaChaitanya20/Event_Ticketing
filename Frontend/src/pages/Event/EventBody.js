// import React, { useEffect,useState } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import geteventbyid from 'util/EventById'
import './EventBody.css'

const EventBody = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [event, setEvent] = useState({
		name: '',
		category: '',
		date: '',
		time: '',
		location: {
			venueName: '',
			venueAddress: ''
		},
		image: '',
		description: '',
		organizer: {
			name: '',
			email: ''
		}
	});

    useEffect(() => {
        const fetchData = async () => {
            const data=await geteventbyid(id);
			if(data.status !== 200 ){
				alert(data.message);
				navigate('/events');
			}
            setEvent(data.response);
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
				{/* <div className="event-time">{event.time}</div> */}
				<div className="event-location">
					<span>Venue: </span>
					{event.location.venueName}
				</div>
				<div className="event-address">
					<span>Address: </span>
					{event.location.venueAddress}
				</div>
			</div>

		{
			event.image==='default'?
			<img src={`https://via.placeholder.com/150?text=${event.name}`} alt={event.name} />
			:<img className="eventimage" src={'data:image/'+event.image_ext+';base64,'+event.image} alt="Event" />
		}


			<div className="event-description">
				{event.description}
			</div>
			{event.organizer ?
				<div className="event-organizer">
					<div className="organizer">Organizer Details</div>
					<div className="details">
						<div className="organizer-name">
							<span>Organizer name: </span>
							{event.organizer.name}
						</div>
						<div className="organizer-email">
							<span>Organizer email: </span>
							{event.organizer.email}
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
