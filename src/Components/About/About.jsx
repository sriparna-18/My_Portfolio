import React from 'react'
import './About.css'
import profilepic from '../../assets/profilepic.jpeg'
import theme from '../../assets/theme-pattern.jpg'
const About=() => {
  return (
    <div>
     <div className="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profilepic} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I aspire to be a Software Developer with relevant skills and by putting the skills into right use, I want to contribute in team work which in turn can upgrade my experience, the organization and the world in general.</p>
                    <p> I keep interest in coding, computer fundamentals and development</p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"><p> Data Structures and Algorithms </p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p> Problem Solving </p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p> Web Development </p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p> Computer Fundamentals </p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>200+ </h1>
                <p>LeetCode problems</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>Hands-on experience in Web Development</h1>
            </div>
        </div>
         </div>
     </div>
        
  )
}
export default About
