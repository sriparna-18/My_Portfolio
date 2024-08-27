import React from 'react'
import './Services.css'

const Services=() => {
  return (
    <div id='service' className='services'>
        <div className="services-title">
            <h1>My Projects</h1>
            
        </div>
        <div className="services-details">
            <h2><span>Course Launcher: Educational Platform with Course Enrollment and Razorpay Payment Gateway</span></h2>
            <p>This project is an educational platform built with React that allows users to explore courses, enroll in them, and make payments through the Razorpay payment gateway.</p>
            <p>Technologies Used
Frontend: React, React Router, React Hook Form, Axios, Modal, Razorpay</p>
<p>Backend: Node.js, Express, Razorpay API</p>
<p>Database: Firebase Firestore</p>

        </div>
        <div className="back-button-container">
          <a href="#home" className="back-button">Back to Home</a>
        </div>
    </div>
  )
}
export default Services