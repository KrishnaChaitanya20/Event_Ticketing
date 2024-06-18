import React, { useState, useEffect } from 'react';
import './Profilebody.css';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    // Fetch user information from the server or local storage
    // Replace with your actual fetch logic
    const fetchedUserInfo = {
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
    setUserInfo(fetchedUserInfo);
  }, []);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleChangePassword = () => {
    setIsChangingPassword(true);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    // Save profile changes to the server
    setIsEditing(false);
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    // Save new password to the server
    alert('Password changed successfully');
    setIsChangingPassword(false);
    setNewPassword('');
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {!isEditing && !isChangingPassword && (
        <div className="profile-info">
          <p><strong>Name:</strong> {userInfo.name}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <button onClick={handleEditProfile}>Edit Profile</button>
          <button onClick={handleChangePassword}>Change Password</button>
        </div>
      )}

      {isEditing && (
        <form onSubmit={handleSaveProfile}>
          <label>
            Name:
            <input
              type="text"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            />
          </label>
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      )}

      {isChangingPassword && (
        <form onSubmit={handleSavePassword}>
          <label>
            New Password:
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>
          <button type="submit">Save</button>
          <button onClick={() => setIsChangingPassword(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default Profile;
