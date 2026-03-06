import React from 'react'
import './Hero.css'
export default function Hero() {
     return (
          <>
               <div className="card">
                    <div className="left-child">
                         <div className="vision">
                              <i class="fa-regular fa-eye"></i>
                              <span>Our Vision</span>
                         </div>
                         <h1>
                              Empowering Businesses Through Technology
                         </h1>
                         <p>
                              Since 2015, we've been on a mission to help startups, SMEs, and enterprises thrive in the digital age. Our team of 50+ skilled professionals combines technical expertise with business acumen to deliver solutions that drive real results.
                         </p>
                         <p>
                              We don't just write code—we build experiences, solve problems, and create value. From Silicon Valley startups to Fortune 500 companies, our clients trust us to bring their boldest ideas to life.
                         </p>
                         <div className="cards">
                              <div className="card-items">
                                   <h2>8+</h2>
                                   <span>Year of Experience</span>
                              </div>
                               <div className="card-items">
                                   <h2>50+</h2>
                                   <span>Expert team Member</span>
                              </div>
                               <div className="card-items">
                                   <h2>15+</h2>
                                   <span>Countries Served</span>
                              </div>
                         </div>


                    </div>
                    <div className="right-child">
                         <div className="child-1">
                              <div className="card-1">
                                  <div className="content">
                                    <h1>200+</h1>
                                   <p>
                                        Project Delivered
                                   </p>
                                  </div>
                              </div>
                                <div className="card-2">
                                  <div className="content">
                                    <h1>98%</h1>
                                   <p>Client Satisified</p>
                                  </div>
                              </div>

                         </div>
                         <div className="child-2">
                              <div className="card-1">
                                  <div className="content">
                                    <h1>24/7</h1>
                                   <p>Support Avalible</p>
                                  </div>
                              </div>
                              <div className="card-2">
                                  <div className="content">
                                    <h1>100%</h1>
                                   <p>On-Time Delivery</p>
                                  </div>
                              </div>

                         </div>

                    </div>
               </div>
          </>
     )
}
