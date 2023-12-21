// ImageThree.js

import React from 'react';
import { Parallax } from 'react-parallax';
import Winter from '../images/christmas-3.jpg';
import CountdownClock from './CountdownClock'; // Import the CountdownClock component

const ImageThree = () => (
  <Parallax className='image' bgImage={Winter} strength={200}>
    <section id="interactive" className="parallax-section">
      <div className="parallax-bg">
        <div id="snowfall"></div>
      </div>
      <div className="parallax-content">
        <h2>Countdown</h2>
        <p>Get ready to engage in the mood of festivity!</p>
        <CountdownClock /> {/* Include the CountdownClock component */}
      </div>
    </section>
  </Parallax>
);

export default ImageThree;