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
          <h3>M.SAI RATHAN - Manager</h3>
          <p>sai rathan is the project manager overseeing the development and ensuring that we meet our deadlines and quality standards.</p>
        </div>
        <div className="team-member">
          <img src={teamLeadPhoto} alt="Team Lead" className="team-photo" />
          <h3>D.KRISHNA CHAITANYA - Team Lead</h3>
          <p>krishna chaitanya is the team lead who coordinates between the developers and the project manager, ensuring smooth communication and task delegation.</p>
        </div>
        <div className="team-member">
          <img src={seniorDeveloperPhoto} alt="Senior Developer" className="team-photo" />
          <h3>T.ROHITH - Senior Developer</h3>
          <p>rohith is our senior developer who writes most of the critical code and mentors junior developers, ensuring high code quality.</p>
        </div>
        <div className="team-member">
          <img src={internPhoto} alt="Intern" className="team-photo" />
          <h3>M.NISHIKANTH - Intern</h3>
          <p>nishikanth is an enthusiastic intern who assists in various development tasks, learning the ropes of software development.</p>
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
