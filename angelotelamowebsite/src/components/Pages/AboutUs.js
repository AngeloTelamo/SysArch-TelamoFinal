import React from 'react'
import '../../App.css'
import Footer from '../Footer';

function AboutUs() {

  const introStyle = {
    color: 'black',
    fontSize: '18px',
    align: 'center',
  };

  return (
    <div>
      <h1 className='aboutUs'>About Us 
        <p style={introStyle} >Freedom to Balance</p>
     </h1>
      <Footer/>
    </div>
  )
}
export default AboutUs
