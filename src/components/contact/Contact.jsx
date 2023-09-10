import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <section id="contact-section">
    <div className='container form-container flex'>
      
        <form action="" method='' className='form-box flex'>
        <h2 className='contact-form-heading'>Contact Me</h2>
        <label htmlFor="name">Name</label>
            <input type="text" className='form-control' id='name' />
          <label htmlFor="name">Email</label>
            <input type="text" className='form-control'  />
          <label htmlFor="name">Message</label>
          <textarea className="form-control" rows={5} cols={40}></textarea>
          <button className='primary-button'>Submit</button>
        </form>
        <img src="assets/feedback.jpg" alt="" className="feedback-img" />
    </div>
    </section>

  )
}

export default Contact
