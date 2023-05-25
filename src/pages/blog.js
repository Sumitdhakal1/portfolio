import React from 'react'
import "../styles/blog.css"
import { AiOutlineClockCircle } from 'react-icons/ai';

const Blog = () => {
  return (
    <div className="blog_main">
        <div className="container_main">
            <div className="blog_warpper">
                <span>VISIT MY BLOG AND KEEP YOUR FEEDBACK</span>
                <h1>My Blog</h1>
            </div>
           <div className="blog_area">
            <div className="blog_area_warpper">
                <div className="blog">
                    <div className="image">
                        <img src="assets/logo-06.png" alt="" />
                    </div>
                    <div className="info">
                        <span>Gallery</span>
                        <AiOutlineClockCircle className='clock'/><p>4 min read</p>
                    </div>
                    <h1>what i learned about html</h1>
                </div>              
            </div>
            <div className="blog_area_warpper">
                <div className="blog">
                    <div className="image">
                        <img src="assets/logo-06.png" alt="" />
                    </div>
                    <div className="info">
                        <span>Gallery</span>
                        <AiOutlineClockCircle className='clock'/><p>4 min read</p>
                    </div>
                    <h1>what i learned about html</h1>
                </div>              
            </div>
            <div className="blog_area_warpper">
                <div className="blog">
                    <div className="image">
                        <img src="assets/logo-06.png" alt="" />
                    </div>
                    <div className="info">
                        <span>Gallery</span>
                        <AiOutlineClockCircle className='clock'/><p>4 min read</p>
                    </div>
                    <h1>what i learned about html</h1>
                </div>              
            </div>
           </div>
        </div>
    </div>
  )
}

export default Blog