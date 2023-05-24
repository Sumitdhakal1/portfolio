import React from 'react'
import "../styles/home.css"
const Home = () => {
    return (
        <div className="home">
            <div className="container_main">
                <div className="home_warpper">
                    <div className="image">
                        <img src="assets/logo-06.png" alt="" />
                    </div>
                    <h1>Hi, I’m Sumit Dhakal</h1>
                    <div className="i_am">
                        <span>I am a </span>
                    </div>
                    <div className="auto_text">
                        <span>UI/UX Designer</span>
                    </div>
                    <div className="button_area">
                       <button>contact me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home