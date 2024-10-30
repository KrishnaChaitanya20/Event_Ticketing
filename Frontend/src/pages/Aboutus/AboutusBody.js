import React from 'react';
import './AboutusBody.css';
const AboutUs = () => {
    const managerPhoto='https://img.icons8.com/?size=100&id=31013&format=png&color=000000';
    const teamLeadPhoto='https://img.icons8.com/?size=100&id=31013&format=png&color=000000';
    const seniorDeveloperPhoto='https://img.icons8.com/?size=100&id=31013&format=png&color=000000';
    const internPhoto='https://img.icons8.com/?size=100&id=31013&format=png&color=000000';
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="team">
        <div className="team-member">
          <img src={managerPhoto} alt="Manager" className="team-photo" />
          <h3>M.SAI RATHAN </h3>
        </div>
        <div className="team-member">
          <img src={teamLeadPhoto} alt="Team Lead" className="team-photo" />
          <h3>D.KRISHNA CHAITANYA </h3>
        </div>
        <div className="team-member">
          <img src={seniorDeveloperPhoto} alt="Senior Developer" className="team-photo" />
          <h3>T.ROHITH</h3>
        </div>
        <div className="team-member">
          <img src={internPhoto} alt="Intern" className="team-photo" />
          <h3>M.NISHIKANTH</h3>
        </div>
      </div>
      <div className="app-info">
        <h2>About the Event Ticketing App</h2>
        <p>
          Our Event Ticketing app is designed to simplify the process of buying and selling tickets for various events.
          With a user-friendly interface and secure payment options, it ensures a seamless experience for event organizers and attendees alike.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
