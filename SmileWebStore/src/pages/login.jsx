import React from 'react'
import '../styles/login.css';
import Logo from '../assets/Logo/Logo.png'
import Navbar from '../components/navbar';
import { useState } from 'react';
import { TextField, Button, Link } from '@mui/material';
import { handleLoginSubmit } from '../services/Loginservice/loginhandler';
const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    handleLoginSubmit(email, password, setError, () => {
    });
  };
  return (
    <div className='form-container'>
    <div className='logotitle'>
      SMILE
    </div>
    <TextField id="Email-login" label="Email" variant="outlined"
     size="medium" className="textfield"  margin="normal"  onChange={(e) => setEmail(e.target.value)} />
     
    <TextField id="Password-login" label="Password" variant="outlined" 
    size="medium" className="textfield"  margin="normal" type="password" onChange={(e) => setPassword(e.target.value)}/>

    <button type="submit" className='button' onClick={handleSubmit}>Login</button>
    {error && <div className='error'>{error}</div>}
    <div className='note'>
    Not a member? <a href='/signup' style={{ textDecoration: 'underline', }}>Signup</a>
</div>

    </div>
  )
}

export default Loginpage