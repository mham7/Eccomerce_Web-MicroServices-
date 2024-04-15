import React from 'react'
import '../styles/navbar.css';
import Logo from '../assets/Logo/Logo.png'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='logo'>
       SMILE
    </div>
    <div className='items'>
    <div className="item">
            SALE   
            </div>
            <div className="item">
            NEWIN         
            </div>
            <div className="item">
            TRENDING   
            </div>
            <div className="item">
            SPORTS
            </div>
        </div>
      <div className='icons'>
        <div className='icon'>
            <SearchSharpIcon/>
        </div>
        <div className='icon'>
            <PersonSharpIcon/>
        </div>
        <div className='icon'>
            <LocalMallSharpIcon/>
        </div>
      </div>
    </div>
  )
}

export default Navbar