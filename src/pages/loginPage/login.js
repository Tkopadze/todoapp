

import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleNameChange = (e) => {
    localStorage.setItem('name',e.target.value)
    setName(e.target.value);
  };



  const handlePhotoChange = (e) => {
    localStorage.setItem('photo',JSON.stringify(e.target.value))
    setPhoto(URL.createObjectURL(e.target.files[0]));
   
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
   
    navigate('/taskPage',{ params: { name:name, photo :photo} });
  };

  return (
 
      <div className="wrap">
        <h1 className="started">Get Started</h1>
        <h2 className="addPhotoText">add a photo</h2>
        <input className="photoDiv" type='file'  onChange={handlePhotoChange}/>             
        {photo && <img className="previewImg" src={photo} alt="Preview" />}

                   
        <h2 className="name">fill in your NAME</h2>
        <input className='input' type='text' value={name ||null} onChange={handleNameChange} placeholder='YOUR NAME' />
        <button className='SIGN-button' type='submit' onClick={handleSubmit} >SIGN IN</button>
      </div>
    
  );
}

export default Login;
