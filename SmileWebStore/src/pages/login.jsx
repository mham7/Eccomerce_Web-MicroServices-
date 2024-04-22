import React from 'react'
import '../styles/login.css';
import Logo from '../assets/Logo/Logo.png'
import Navbar from '../components/navbar';
import { useState } from 'react';
const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  return (
    <div className='form-container'>
    <div className='logotitle'>
      SMILE
    </div>
    <input
          className="textfield"
          placeholder="Email"
        />
    <input
          className="textfield"
          placeholder="Password"
    />
    <button className='button'>Login</button>
    
    <div className='note'>
    Not a member? <a href='/signup' style={{ textDecoration: 'underline', }}>Signup</a>
</div>

    </div>
  )
}

export default Loginpage