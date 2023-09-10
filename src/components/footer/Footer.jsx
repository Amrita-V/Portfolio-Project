import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    
   <footer className='footer-container flex'>
    <p>Amrita Vishwakarma - Portfolio 2023</p>
    <div className='social-links'>
   <a href='https://www.linkedin.com/in/amrita-vishwakarma-b50189205/' target='_blank'> <img src='./assets/linkedin.png'/></a>
   <a href='https://wa.me/9644075362' target='_blank'><img src='./assets/whatsapp.png'/></a>
   <a href='#'>  <img src='./assets/instagram.png'/></a>

    </div>
   
    </footer> 
    
  )
}

export default Footer
