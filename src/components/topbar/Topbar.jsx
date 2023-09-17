import React from 'react'
import './topbar.css';
const Topbar = () => {
  const toggleNav =()=>
  {
    const toggleButton = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    toggleButton.addEventListener('click',()=>{
      navLinks.classList.toggle('active');
      console.log("click hua");
    });
  }
  return (
    
    <section className="topbar-section" id='home'>
    <div className='main-nav flex'>
            {/* <h1>My Portfolio</h1> */}
          <img src='assets/logo.png' alt='logo-image' className='logo'/>
        <div className="nav-links" id="nav-links">
                <ul className='flex'>
                    {/* <li><a href="#home" className='hover-link'>Home</a></li> */}
                    <li><a href="#introduction" className='hover-link'>About</a></li>
                    <li><a href="#education-section" className='hover-link'>Education</a></li>
                    <li><a href="#skill-section" className='hover-link'>Skills</a></li>
                    <li><a href="#project-section" className='hover-link'>Projects</a></li>
                    <li><a href="#certification-section" className='hover-link'>Certification</a></li>
                    <li><a href="#experience-section" className='hover-link'>Experience</a></li>
                    <li><a href="#footer-section" className='hover-link'>Contact</a></li>
                </ul>
        </div>
        <a className="nav-toggle hover-link" id="nav-toggle" ><i className="fa-solid fa-bars"></i></a>
    </div>
    </section>
  )
}

export default Topbar
