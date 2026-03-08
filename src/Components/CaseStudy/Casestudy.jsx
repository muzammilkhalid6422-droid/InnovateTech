import React from 'react'
import './Casestudy.css'
import firstcard from '../Image/Card-1.png'
import secondcard from '../Image/Ai.png'
export default function Casestudy() {
  return (
    <>
      <div className="case-study">
          <h4>
               <i class="fa-regular fa-star"></i>
               Case Study
          </h4>
          <h1>
               Success
               <span>
                    Stories
               </span>
          </h1>
          <p>
               Real projects, real results. See how we've helped businesses achieve <br/> extraordinary growth.
          </p>
            <div className="case-study-card">
               <div className="study-card-items">
                    <div className="img">
                      <img src={firstcard} alt="" />
                    </div>
                    <div className="tag">
                         <span>web Development</span>
                    </div>
                    <div className="text">
                         <h2>FinTech Payment Platform</h2>
                         <span>Revolutionary payment processing platform with real-time analytics and fraud detection.</span> <br/>
                         <i class="fa-solid fa-arrow-trend-up"></i><b> Impact</b>
                         <ul>
                              <li>300% increase in transactions</li>
                              <li>$50M+ processed monthly</li>
                              <li>0.01s average response time</li>
                         </ul>
                         <div className="course">
                              <span>React</span>
                              <span>Node.js</span>
                              <span>Postgre SQl</span>
                              <span>Stripe</span>

                         </div>

                    </div>
                    <div className="btn">
                    <link rel="stylesheet" href="#" />View Case Study
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
               </div>
                <div className="study-card-items">
                    <div className="img">
                      <img src={firstcard} alt="" />
                    </div>
                    <div className="tag">
                         <span>Mobile Development</span>
                    </div>
                    <div className="text">
                         <h2>Healthcare Mobile App</h2>
                         <span>HIPAA-compliant telemedicine app connecting patients with doctors seamlessly.</span> <br/>
                         <i class="fa-solid fa-arrow-trend-up"></i> <b>Impact</b>
                         <ul>
                              <li>50K+ active users</li>
                              <li>4.9★ app store rating</li>
                              <li>92% user retention</li>
                         </ul>
                         <div className="course">
                              <span>Flutter</span>
                              <span>Firebase</span>
                              <span>WebRTC</span>
                              <span>Tensor Flow</span>

                         </div>

                    </div>
                    <div className="btn">
                    <link rel="stylesheet" href="#" />View Case Study
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
               </div>
                <div className="study-card-items">
                    <div className="img">
                      <img src={secondcard} alt="" />
                    </div>
                    <div className="tag">
                         <span>AI & Automation</span>
                    </div>
                    <div className="text">
                         <h2>AI Analytics Dashboard</h2>
                         <span>ML-powered business intelligence platform with predictive insights and automated reporting.</span> <br/>
                         <i class="fa-solid fa-arrow-trend-up"></i> <b>Impact</b>
                         <ul>
                              <li>85% time saved on reporting</li>
                              <li>97% prediction accuracy</li>
                              <li>60% cost reduction</li>
                         </ul>
                         <div className="course">
                              <span>Python</span>
                              <span>React</span>
                              <span>AWS</span>
                              <span>Tensor Flow</span>

                         </div>

                    </div>
                    <div className="btn">
                    <link rel="stylesheet" href="#" />View Case Study
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
               </div>
                <div className="study-card-items">
                    <div className="img">
                      <img src={firstcard} alt="" />
                    </div>
                    <div className="tag">
                         <span>Mobile Development</span>
                    </div>
                    <div className="text">
                         <h2>E-Commerce Platform</h2>
                         <span>Scalable multi-vendor marketplace with AI recommendations and seamless checkout.</span> <br/>
                         <i class="fa-solid fa-arrow-trend-up"></i> <b>Impact</b>
                         <ul>
                              <li>250% revenue growth</li>
                              <li>1M+ monthly visitors</li>
                              <li>45% conversion rate increase</li>
                         </ul>
                         <div className="course">
                              <span>Next.js</span>
                              <span>Shopifr</span>
                              <span>WebRTC</span>
                              <span>Vercel</span>

                         </div>

                    </div>
                    <div className="btn">
                    <link rel="stylesheet" href="#" />View Case Study
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
               </div>
            </div>
      </div>
    </>
  )
}
