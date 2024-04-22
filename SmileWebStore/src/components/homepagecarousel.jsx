import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/homepagecarousel.css';

import s from '../assets/Hero/Carousel/s.jpg';
import Slide2 from '../assets/Hero/Carousel/slide2.jpg';
import Slide3 from '../assets/Hero/Carousel/slide3.jpg';
const DemoCarousel = () => {
    return (
        <div class='midsection'>
        <div class="image-container">
          <img src={s} alt="Shopping"/>
          <div class="text-block">
            <h2>Smile</h2>
            <p>Creating Smiles for everyone</p>
          </div>
          <button class="c-button">Smile Now</button>
        </div>
      </div>
      
    );
};



export default DemoCarousel;