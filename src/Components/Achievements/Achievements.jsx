import React from 'react'
import './Achievements.css'
const Achievements=() => {
  return (
    <div id='achievement' className='Achievements'>
        <div className="achievments-title">
            <h1>My Achievements</h1>
        </div>
        <div className="achievements-container">
           <div className="achievement1"><h2>LeetCode</h2>
           <h3>200+ problems solved</h3>
           </div> 
            <div className="achievement2">
                <h2>GeeksforGeeks</h2>
                <h3>50+ problems solved</h3>
            </div>
        </div>
        <div className="back-button-container">
          <a href="#home" className="back-button">Back to Home</a>
        </div>
    </div>
  )
}
export default Achievements