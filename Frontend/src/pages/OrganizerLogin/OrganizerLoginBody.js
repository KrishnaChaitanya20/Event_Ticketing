import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "LoginContext";

const OrganizerLoginBody = () => {
	const { setUser,setIsOrganizer } = useLogin();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(
			process.env.REACT_APP_API_BASE_URL + "/organizers/login",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			}
		);

		var data = await response.json();
		console.log(data);
		if (data.error) {
			alert(data.error);
			return;
		}
		if (data.status === 200) {
			data = data.data;
			setUser({
				id: data.id,
				email: data.email,
				name: data.name,
				events_hosted: data.events_hosted,
			});
			setIsOrganizer(true);
			navigate("/");
		} else {
			alert("Invalid Email or Password");
		}
	}

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Organizer Login</h2>
        <label htmlFor="loginEmail">Email:</label>
        <input
          type="email"
          id="loginEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="loginPassword">Password:</label>
        <input
          type="password"
          id="loginPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="link">
        New organizer? <Link to="/organizer/signup"> Signup</Link>
      </div>
      <div className="link">
        Are you a user? <Link to="/login"> Login</Link>
      </div>
    </div>
  );
};

export default OrganizerLoginBody;
