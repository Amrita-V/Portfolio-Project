import React from 'react'
import './topbar.css';
const Topbar = () => {

  return (
    <section className="topbar-section" id='home'>
    <div className='main-nav flex'>
            {/* <h1>My Portfolio</h1> */}
          <img src='assets/logo.png' alt='logo-image' className='logo'/>
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
    </section>
  )
}

export default Topbar
