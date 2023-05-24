import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom';
import { AiOutlineHome,AiOutlineUserSwitch } from 'react-icons/ai';
import { BiBriefcaseAlt,BiLayer } from 'react-icons/bi';
import { IoImagesOutline } from 'react-icons/io5';
import { TbMessageCircle2 } from 'react-icons/tb';
import { FiFacebook,FiTwitter } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';



const Navbar = () => {
  return (
    
    <div className="main_warpper">
        <div className="navbar">
            <div className="container">
                <div className="navbar_warpper">
                    <div className="image">
                        <img src="assets/logo-06.png" alt="" />
                    </div>
                    <ul>
                       <Link to='/' className='link'><AiOutlineHome className='icons'/>home</Link>
                       <Link to='/' className='link'><BiBriefcaseAlt className='icons'/>features</Link>
                       <Link to='/' className='link'><BiLayer className='icons'/>portfolio</Link>
                       <Link to='/' className='link'><AiOutlineUserSwitch className='icons'/>resume</Link>
                       <Link to='/' className='link'><IoImagesOutline className='icons'/>blog</Link>
                       <Link to='/' className='link'><TbMessageCircle2 className='icons'/>contacts</Link>
                   </ul> 

                   <div className="find_me">
                    <p>find with me </p>
                    <div className="find_me_icons">
                        <div className="icon">
                        <FiFacebook className='facebook_icon'/>
                        </div>
                        <div className="icon">
                        <FiTwitter className='twitter_icon'/>
                        </div>
                        <div className="icon">
                        <SlSocialLinkedin className='linkedin_icon'/>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar