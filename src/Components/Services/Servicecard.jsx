import React from 'react'
import "./Servicscard.css"
export default function Servicecard() {
  return (
    <>
      <div className="serviccard">
        <div className="service-items">
          <div className="service-icon-1">
            <i class="fa-solid fa-angle-left"></i>
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <div className="service-text">
            <h4>
              Web Development</h4>
            <p>
              Lightning-fast, scalable web applications built with React, Next.js, and modern frameworks.
            </p>
            <ul>
              <li><p>Progressive web Apps</p></li>
              <li><p>E-commerece Platforms</p></li>
              <li><p>Custom CMS</p></li>
              <li><p>Real Time Applications</p></li>
            </ul>
            <div className="btn">
              <link rel="stylesheet" href="" />Learn More
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>

        </div>
        <div className="service-items">
          <div className="service-icon-2">
            <i class="fa-solid fa-mobile-screen-button"></i>
          </div>
          <div className="service-text">
            <h4>

              Mobile App Development</h4>
            <p>
              Native and cross-platform mobile apps that users love on iOS and Android.
            </p>
            <ul>
              <li><p>iOS & Android Native</p></li>
              <li><p>E-commerece Platforms</p></li>
              <li><p>App Store Deployment</p></li>
              <li><p>Push Notifications</p></li>
            </ul>
            <div className="btn">
              <link rel="stylesheet" href="" />Learn More
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>

        </div>
        <div className="service-items">
          <div className="service-icon-3">
            <i class="fa-solid fa-brain"></i>
          </div>
          <div className="service-text">
            <h4>

              AI & Automation</h4>
            <p>
              Intelligent solutions powered by machine learning and automation to streamline your operations.
            </p>
            <ul>
              <li><p>Machine Learning Models</p></li>
              <li><p>Chatbots & AI Assistants</p></li>
              <li><p>Process Automation</p></li>
              <li><p>Predictive Analytics</p></li>
            </ul>
            <div className="btn">
              <link rel="stylesheet" href="" />Learn More
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>

        </div>
        <div className="service-items">
          <div className="service-icon-4">
            <i class="fa-solid fa-palette"></i>
          </div>
          <div className="service-text">
            <h4>

              UI/UX Design</h4>
            <p>
              Beautiful, intuitive interfaces that convert visitors into customers and delight users.
            </p>
            <ul>
              <li><p>User Research</p></li>
              <li><p>Prototyping & Testing</p></li>
              <li><p>Prototyping & Testing</p></li>
              <li><p>Brand Identity</p></li>
            </ul>
            <div className="btn">
              <link rel="stylesheet" href="" />Learn More
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>

        </div>
        <div className="service-items">
          <div className="service-icon-5">
            <i class="fa-solid fa-cloud"></i>
          </div>
          <div className="service-text">
            <h4>

              Cloud & API Solutions</h4>
            <p>
              Scalable cloud infrastructure and seamless API integrations for enterprise-grade applications.
            </p>
            <ul>
              <li><p>AWS, Azure, GCP</p></li>
              <li><p>Microservices Architecture</p></li>
              <li><p>API Development</p></li>
              <li><p>DevOps & CI/CD</p></li>
            </ul>
            <div className="btn">
              <link rel="stylesheet" href="" />Learn More
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>

        </div>


      </div>
    </>
  )
}
