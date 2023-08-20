import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <section id="contact-section">
    <div className='container flex'>
        <form action="" method='' className='form-box'>
          <div className="form-group">
            <input type="text" className='form-control' />
          </div>
          <div className="form-group">
            <input type="text" className='form-control' />
          </div>
          <textarea className="form-control"></textarea>
        </form>
    </div>
    </section>

  )
}

export default Contact
