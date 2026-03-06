import React from 'react'
import './Navbar.css'
import logo from '../Image/Logo.png'

export default function () {
  return (
    <>
      <div className="navbar">
          <div className="logo">
               <img src={logo} alt="Image Not found" />
               <h2>InnovateTech</h2>
         </div>
         <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">Contact</a></li>
         </ul>
         <div className="btn">
          <a href="#">Start Your Project</a>
         </div>


      </div>

    </>
  )
}
