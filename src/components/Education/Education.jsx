import React from 'react'
import './education.css';
import { educationalData } from '../../Data/data';
const Education = () => {
  return (
    <div id='education-section'>
      <div className="container education-container flex">
        <img src="assets/education.png" alt="" className="education-img" />
        <div className="education-details-container flex">
          <h2 className='section-heading'>Education</h2>
          {
            educationalData.map((education, index) => {
              return (
                <div className="education-box flex" key={index}>
                  <h3>{education.college}</h3>
                  <h5>{education.year}</h5>
                  <p>{education.course}</p>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Education
