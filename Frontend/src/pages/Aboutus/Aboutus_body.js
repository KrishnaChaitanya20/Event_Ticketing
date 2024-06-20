import React from 'react';
import './Aboutus_body.css';

const Aboutus_body = () => {
    return ( 
        <div className="aboutus-body">
            <h1>About Us</h1>
            <p>Our website is designed to provide a platform for users to book tickets for various events.</p>
            
            <div className="team-section">
                <h2>Our Team</h2>
                <p>This website is designed and maintained by:</p>
                <div className="team-member">
                    <p>Rathan - Project Manager</p>
                </div>
                <div className="team-member">
                    <p>Krishna - Team Lead</p>
                </div>
                <div className="team-member">
                    <p>Rohith - Senior Developer</p>
                </div>
                <div className="team-member">
                    <p>Nishikanth - Fresher</p>
                </div>
            </div>
            
            <div className="contact-section">
                <h2>Contact Us</h2>
                <p>For any queries contact EventBooking@gmail.com or call 90001 61078.</p>
            </div>
        </div>
     );
}
 
export default Aboutus_body;