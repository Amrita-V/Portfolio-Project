import React from 'react'
import './topbar.css';
const Topbar = () => {

  return (
    <div className="topbar-section" id='home'>
    <div className='container main-nav flex'>
            <h1>My Portfolio</h1>
          {/* <img src='{logo}' alt='logo-image' style={{background:"red"}}/> */}
        <div className="nav-links">
                <ul className='flex'>
                    {/* <li><a href="#home" className='hover-link'>Home</a></li> */}
                    <li><a href="#introduction" className='hover-link'>About</a></li>
                    <li><a href="#education-section" className='hover-link'>Education</a></li>
                    <li><a href="#skills-section" className='hover-link'>Skills</a></li>
                    <li><a href="#projects-section" className='hover-link'>Projects</a></li>
                    <li><a href="#certification" className='hover-link'>Certification</a></li>
                    <li><a href="www.google.com" className='hover-link'>Experience</a></li>
                </ul>
        </div>
    </div>
    </div>
  )
}

export default Topbar
