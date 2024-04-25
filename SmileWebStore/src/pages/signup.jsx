import React from 'react'
import { TextField, Button, Link } from '@mui/material';
import { useState } from 'react';
import { handleRegisterSubmit } from '../services/Registerservice/registerhandler';
const Signup = () => {
  const [email,setEmail]=useState("");
  const [firstname,setFirstName]=useState("");
  const [lastname,setLastName]=useState("");
  const [password,setPassword]=useState("");
  const [confirmpassword,setConfirmPassword]=useState("");
  const [error,setError]=useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    handleRegisterSubmit(firstname,lastname,email, password,confirmpassword, setError, () => {
    });
  };
  return (
    <div className='form-container'>
    <div className='logotitle'>
      SMILE
    </div>
    <TextField id="FirstName-Signup" label="First Name" variant="outlined"
     size="medium" className="textfield"  margin="normal" onChange={(e) => setFirstName(e.target.value)}/>
    
    <TextField id="LastName-Signup" label="Last Name" variant="outlined"
     size="medium" className="textfield"  margin="normal" onChange={(e) => setLastName(e.target.value)}/> 
     
     <TextField id="Email-Signup" label="Email" variant="outlined"
     size="medium" className="textfield"  margin="normal" onChange={(e) => setEmail(e.target.value)}/>

    <TextField id="Password" label="Password" variant="outlined"
     size="medium" className="textfield"  margin="normal" onChange={(e) => setPassword(e.target.value)}/>

     <TextField id="Password" label="Confirm Password" variant="outlined"
     size="medium" className="textfield"  margin="normal" onChange={(e) => setConfirmPassword(e.target.value)}/>
   
    <button className='button' onClick={handleSubmit}>Signup</button>

    {error && <div className='error'>{error}</div>}
    <div className='note'>
    Already a member? <a href='/login' style={{ textDecoration: 'underline', }}>Login</a>
</div>
    </div>
  )
}

export default Signup