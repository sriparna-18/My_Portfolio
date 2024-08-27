import React from 'react'
import './Hero.css'
import profilepic from '../../assets/profilepic.jpeg'
const Hero=() => {
  return (
    <div id='home' className='hero'>
        <img src={profilepic} alt="Profile"/>
        <h1><span>I'm Sriparna Debbarman,</span> Computer Science Engineering student from Kolkata</h1>
        <p>I am proficient in Data Structures and Algorithms, Computer Fundamentals and Web Development. I'm always trying to better myself and looking out for more opportunities to collaborate and learn new things.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}
export default Hero
