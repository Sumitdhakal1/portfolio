import React from 'react'
import "../styles/resume.css"
import { Link } from 'react-router-dom'
const Resume = () => {
    return (
        <div className="resume_main">
            <div className="container_main">
                <div className="resume_warpper">
                    <h1>My Resume</h1>
                </div>
                <div className="resume_area">
                    <ul>
                        <Link to='/' className='li'>Eduction</Link>
                        <Link to='/' className='li'>Professional Skills</Link>
                        <Link to='/' className='li'>Experience</Link>
                        <Link to='/' className='li'>Interview</Link>
                    </ul>
                    <div className="education">                 
                        <div className="education_warpper">
                            <div className="education_details">
                                 <h1>SLC</h1>
                                <p>MODERN ERA HIGHER SECONDARY SCHOOL,Biratnagar</p>
                            </div>
                        </div>
                        <div className="education_warpper">
                            <div className="education_details">
                            <h1>commerce</h1>
                             <p>ORCHID HIGHER SECONDARY SCHOOL,Biratnagar</p>
                            </div>
                        </div>
                        <div className="education_warpper">
                            <div className="education_details">
                             <h1>Bachelor In Information Technology</h1>
                             <p1>purbanchal university school of science and technology (PUSAT),Biratnagar</p1>
                            </div>
                        </div>
                    </div>

                    {/* professional skill */}
                     <div className="skills">
                        <div className="skill_warpper">
                            <div className="skill_details">
                                <h1>Developmet Skill</h1>

                                <div className="progress_chart">
                                   <div className="text">
                                   <span>html</span>
                                   <div className="progress">
                                    <div className="progress_line1">
                                        <span1>100%</span1>
                                       </div>
                                    </div>
                                   </div>
                                   <div className="text">
                                   <span>css</span>
                                   <div className="progress">
                                    <div className="progress_line2">
                                        <span1>40%</span1>
                                       </div>
                                    </div>
                                   </div>
                                   <div className="text">
                                   <span>react</span>
                                   <div className="progress">
                                    <div className="progress_line3">
                                        <span1>10%</span1>
                                       </div>
                                    </div>
                                   </div>
                                  
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Resume