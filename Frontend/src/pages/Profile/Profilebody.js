import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLogin } from 'LoginContext';
import './Profilebody.css'

const Profilebody = () => {
  const {user,setUser,isOrganizer}=useLogin();
  const [isedit,setIsedit]=useState(false);
  const [iseditpass,setIseditpass]=useState(false);
  const [newname,setNewname]=useState(user.name);
  const [newemail,setNewemail]=useState(user.email);
  const [newpassword,setNewpassword]=useState('');

  const navigate=useNavigate();
  useEffect(()=>{
    if(!user.name){
      navigate('/login');
      
    }
  },[user,navigate]);

  const handleEdit=()=>{
    setIsedit(true);
  }

  const handleEditpass=()=>{
    setIseditpass(true);
  }

  const handleSave=()=>{
      setIsedit(false);
      const updateInServer=async()=>{
        if(!isOrganizer)
          var url=process.env.REACT_APP_API_BASE_URL+'/users/updateUser/'+user.id 
        else
          var url=process.env.REACT_APP_API_BASE_URL+'/organizers/updateOrganizer/'+user.id
        console.log(url);
        const response=await fetch(url,{
          method:'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({name:newname,email:newemail})
        });
        const data=await response.json();
        console.log(data);
        if(data.status===200){
          setUser({...user,name:newname,email:newemail});
        }
        else{
          alert(data.message);
        }
      }
      updateInServer();
  }

  const handleSavepass=()=>{
    setIseditpass(false);
    setUser({...user,password:newpassword});
  }

  const handleCancel=()=>{
    setIsedit(false);
    setIseditpass(false);
  }


  return (
    <>
      {
        !isedit && !iseditpass &&
          <div className='profile-container'>
            <p><b>Username: </b> {user.name}</p>
            <p><b>Email: </b> {user.email}</p>
            <div className="buttonbox">
              <button className="button" onClick={(e)=>handleEdit()}>Edit Profile</button>
              <button className="button" onClick={(e)=>handleEditpass()}>Change Password</button>
            </div>
          </div>
      }

      {
        isedit &&
        <div className='profile-container'>
          <label htmlFor="username">Username:</label>
          <input type='text' id='username' value={newname} onChange={(e)=>setNewname(e.target.value)}></input>
          <label htmlFor="email">Email:</label>
          <input type='text' value={newemail} onChange={(e)=>setNewemail(e.target.value)}></input>
          <div className="buttonbox">
            <button className="button" onClick={()=>handleSave()}>Save</button>
            <button className="button" onClick={()=>handleCancel()}>Cancel</button>
          </div>
        </div>
      }

      {
        iseditpass &&
        <div className='profile-container'>
          <label htmlFor="password">Password:</label>
          <input type='password' value={newpassword} onChange={(e)=>setNewpassword(e.target.value)}></input>
          <div className="buttonbox">
            <button className="button" onClick={()=>handleSavepass()}>Save</button>
            <button className="button" onClick={()=>handleCancel()}>Cancel</button>
          </div>
        </div>
      }
    </>
  )
}

export default Profilebody
