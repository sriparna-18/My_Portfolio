import React from 'react'
import './Navbar.css'
import coded from '../../assets/coded.jpg'
const Navbar=() => {
  return (
    <div className='navbar'>
        <img src={coded} alt=""/>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect with Me</div>
    </div>
  )
}
export default Navbar
