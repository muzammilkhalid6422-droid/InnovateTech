import React from 'react'
import './Card.css'
export default function Card() {
  return (
    <>
      <div className="container">
          <h1>What Drives Us</h1>
          <div className="Box">
               <div className="Boxs-items">
                    <div className="icon-1">
                         <i className="fa-regular fa-circle"></i>
                    </div>
                    <div className="text">
                         <h4>Innovation First</h4>
                         <p>
                              Pushing boundaries with cutting-edge technology and creative solutions.
                         </p>
                    </div>

               </div>
               <div className="Boxs-items">
                    <div className="icon-2">
                         <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className="text">
                         <h4>Client Success</h4>
                         <p>
                              Your success is our mission. We build lasting partnerships, not just projects
                         </p>
                    </div>

               </div>
               <div className="Boxs-items">
                    <div className="icon-3">
                         <i className="fa-solid fa-rocket"></i>
                    </div>
                    <div className="text">
                         <h4>Fast Delivery</h4>
                         <p>
                              Agile development with rapid iterations and transparent communication.
                         </p>
                    </div>

               </div>
               <div className="Boxs-items">
                    <div className="icon-4">
                         <i className="fa-solid fa-award"  style={{padding:"12px"}}></i>
                    </div>
                    <div className="text">
                         <h4>Quality Assured</h4>
                         <p>
                              8+ years of excellence with 98% project success rate across industries.
                         </p>
                    </div>

               </div>
          </div>
      </div>
    </>
  )
}
