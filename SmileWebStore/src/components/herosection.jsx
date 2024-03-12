import React from 'react';
import Hero from '../assets/Hero/Hero.png';
import '../styles/herosection.css';
const Herosection = () => {
  return (
    <div className='hero-section'>
    <div className='hero-detail'>
    <div className='hero-text'>NEW COLLECTION</div>
    <div className='hero-text1'>SMILE CLOTHING</div>
    <div className='hero-textdetail'>Unleash your inner smile with the vibrant colors and playful designs of the Smile Collection. Dress with confidence and express yourself in a way that makes you feel joyful.</div>
    <butto className='hero-button'>SHOP NOW</butto>
    </div>
     <div className='heropic'>
      <img src={Hero} alt="Shopping"/>
    </div>
    </div>
  )
}

export default Herosection