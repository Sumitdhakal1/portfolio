import React from 'react'
import "../styles/contact.css"
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
const Contact = () => {
    return (
        <div className="contact_main">
            <div className="container_main">
                <div className="contact_heading">
                    <span>contact</span>
                    <h1>contact with me</h1>
                </div>
                <div className="contact_details_warpper">
                    <div className="contact_warpper">
                        <div className="about_contact">
                            <div className="image">
                                <img src="assets/logo-06.png" alt="" />
                            </div>
                            <h1>Sumit Dhakal</h1>
                            <span>web designer</span>
                            <p>I am available for work. Connect with me via and call in to my account.</p>
                            <span>Phone: +01234567890</span>
                            <br />
                            <span>Email: admin@example.com</span>

                            <div className="find_me">
                                <span>FIND WITH ME</span>
                            </div>
                            <div className="social_links">
                            <div className="icons">
                              <FiFacebook  className='facebook'/>
                              </div>
                                <div className="icons">
                                <FiTwitter className='twitter'/>
                                </div>
                                <div className="icons">
                                <SlSocialLinkedin  
                                className='linkedin'/>
                                </div>
                                </div>
                           
                        </div>
                        <div className="contact_form_warpper">
                            <div className="contact_form">
                                <div className="first">
                                    <div className="name">
                                        <span>Your Name</span>
                                        <br/>
                                        <input type="text" />
                                    </div>
                                    <div className="number">
                                        <span>Your Number</span>
                                        <br/>
                                        <input type="text"  placeholder=''/>
                                    </div>
                                </div>
                                <div className="email">
                                <span>Email</span>
                              <br/>
                                <input type="text" />
                                </div>
                              <br/>
                                <div className="subject">
                                <span>Subject</span>
                                <br/>
                                <input type="text" />
                                </div>
                                <br/>
                               
                                <div className="message">
                                    <span>your message</span>
                                    <br/>
                                    <textarea name="" id="" cols="50" rows="13"></textarea>
                                </div>
                                <div className="send_button">
                                    <button>Send message</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact