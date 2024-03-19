import React from 'react'
import '../styles/login.css';
import Logo from '../assets/Logo/Logo.png'
import Navbar from '../components/navbar';
const Loginpage = () => {
  return (
    <div className='form-container'>
    <div className='logo'>
      <img src={Logo} alt="Logo"/>
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
    <div className='note'>Not a member?Signup</div>
    </div>
  )
}

export default Loginpage