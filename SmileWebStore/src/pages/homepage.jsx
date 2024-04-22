import React from 'react'
import Navbar from '../components/navbar';
import Herosection from '../components/herosection';
import DemoCarousel from '../components/homepagecarousel';
const Homepage = () => {
  return (
    <div className='homepage'>
    <Navbar></Navbar>
    <Herosection/>
   <DemoCarousel/>
    </div>
  )
}

export default Homepage