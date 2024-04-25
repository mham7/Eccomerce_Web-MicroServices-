import React from 'react'
import Navbar from '../components/navbar';
import Herosection from '../components/herosection';
import DemoCarousel from '../components/homepagecarousel';
import Endsection from './endsection';
const Homepage = () => {
  return (
    <div className='homepage'>
    <Navbar></Navbar>
    <Herosection/>
   <DemoCarousel/>
   <Endsection/>
    </div>
  )
}

export default Homepage