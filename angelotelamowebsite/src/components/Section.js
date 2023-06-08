import React from 'react'
import '../App.css';
import { Button } from './Button'
import './Section.css';


function Section() {
  const introStyle = {
    color: 'white',
    fontSize: '18px',
  };
  return (
    <div className='hero-container'>

      <video src="/videos/citylights.mp4" autoPlay loop muted/>
      <h1>WELCOME</h1>
      <center>

        <p style={introStyle}>Are you ready to explore the exciting world of freelance work? Look no further! <br/>Our website is your gateway to a multitude of freelance opportunities. <br/>Whether you're a seasoned freelancer or just starting your journey, we have everything you need to succeed. From connecting with clients to building your portfolio,<br/>our platform is designed to help you thrive in the world of freelancing.</p>
        </center>
        
      <div className="hero-btns">

        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>Get Started
        </Button>
        
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>Login
        </Button>
      
      </div>
    </div>
  )
}

export default Section
