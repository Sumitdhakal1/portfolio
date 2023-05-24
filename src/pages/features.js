import React from 'react'
import { SlSocialLinkedin } from 'react-icons/sl';
import "../styles/features.css"
const Features = () => {
  return (
    <div className="features_main">
      <div className="container_main">
        <div className="features_warpper">
          <span>FEATURES</span>
          <h1>What I Do</h1>
        </div>
        <div className="fetaure_details">
        <div className="feature_container">
          <div className="feature_box">
            <div className="feature">
              <h1>Ui/Ux Design</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur error assumenda repellendus laboriosam asperiores officiis</p>
            </div>
            <div className="feature">
              <h1>Css</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur error assumenda repellendus laboriosam asperiores officiis</p>
            </div>
            <div className="feature">
              <h1>React</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur error assumenda repellendus laboriosam asperiores officiis</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features