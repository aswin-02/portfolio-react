import React, { useEffect, useRef } from 'react';
import "./Home.css";

import FOG from 'vanta/dist/vanta.fog.min';
// import ParticlesBackground from "./components/ParticlesBackground";

// import DOTS from "vanta/dist/vanta.dots.min";

  

function About() {


  useEffect(() => {
    FOG({
      el: "#vanta",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xac22ca,
  midtoneColor: 0xff0092,
  baseColor: 0x6006a2,
  blurFactor: 0.90,
  speed: 2.70,
  zoom: 1.20
    })
  },[])

  return (

    <div>
      <div className='bg' id='vanta' style={{width:"100%",marginTop:'10%',filter:'brightness(0.9)'}}>
         
      <div   class="about-container text-center" id="about" >
          <div class="about-text text-center glass-card">
            <h1>A Little About Myself</h1>
            <br />
            <div class="text-center about-para">
           
              <p class="hero-p text-light w-75 pb-5">
                Hi, <br />
                I'm <strong class="text-light">Aswin</strong>, pursuing a
                Bachelor's in Computer Science at Sri Ramakrishna Institute of
                Technology. Enthusiastic about technology, I aim to excel in
                emerging technologies. Currently seeking software development
                internships and full-time roles to enhance skills and contribute
                to meaningful projects.
              </p>
            </div>
          </div>
        </div> 

      </div>
      
      </div>

  );
}

export default About;

    



