import React from 'react'
import './Home.css'
import home from '../Image/Home.png'
export default function Home() {
     return (
          <>
               <div className="main">
                    <div className="header">
                         <div className="card">
                                   <img src={home} alt="image not found" />
                                   <span> Trusted by 200+ Global Companies</span>
                         </div>
                    </div>
                    <h1>
                         Build the Future with <span>World-Class Software</span>
                    </h1>
                    <p>
                         Transform your ideas into powerful digital solutions. We create <br></br> innovative web, mobile, and AI applications that drive growth.
                    </p>
                    <div className="button">
                         <div className="left"> 
                                <span> Get Started Free</span>  
                              <i class="fa-solid fa-arrow-right"></i>
                         </div>
                         <div className="right">
                              <span>See Our Work</span>
                         </div>
                    </div>
                    <div className="cards">
                         <div className="card-item-1">
                              <i class="fa-solid fa-bolt"></i>
                              <h2>200+</h2>
                              <span>Project Delivered</span>
                         </div>
                          <div className="card-item-2">
                              <i class="fa-solid fa-shield"></i>
                              <h2>98% </h2>
                              <span style={{padding:"0px 15px"}}>Success Rate</span>
                         </div>
                          <div className="card-item-3">
                              <i class="fa-solid fa-arrow-trend-up"></i>
                              <h2>150+</h2>
                              <span style={{padding:"0px 32px"}} >Avg. RoI</span>
                         </div>
                          <div className="card-item-4">
                              <i class="fa-regular fa-star"></i>
                              <h2>50+</h2>
                              <span style={{padding:"0px 18px"}}>Happy Clients</span>
                         </div>
                    </div>
                    <div className="text">
                         <span>Trustrd By Teams At</span>
                         <br/>
                         <ul>
                              <li><h3>Strip</h3></li>
                              <li><h3>Notion</h3></li>
                              <li><h3>Figma</h3></li>
                              <li><h3>Slack</h3></li>
                              <li><h3>Vercel</h3></li>
                         </ul>

                    </div>
               </div>
          </>
     )
}
