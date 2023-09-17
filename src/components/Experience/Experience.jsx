import React from 'react'
import './experience.css';

const Experience = () => {
    return (

        <section id="experience-section">
            <div className="container">
                <h2 className='section-heading'>WORK EXPERIENCE</h2>
                <div className="experience-box">
                    <ul style={{ listStyle: "disc" }}>
                        <li><h4>Jr. Software Developer &nbsp;&nbsp;(02/2023 - 07/20223)</h4>
                        </li>
                        <h5>Taritas Software Solution Pvt. Ltd., Jabalpur</h5> </ul>
                    <div className="work-details">
                        <ul style={{ listStyle: "circle" }}>
                            <li>Worked on Swasth Bharat health assessment mobile application on .NET MAUI technology, done UI design in XAML for mobile pages and enhanced UI using HTML/CSS/Bootstrap for web.</li>
                            <li>Implement JS-based PDF printing functionality along with the layout design for the assessment pdf report.</li>
                            <li>Resolved DB data retrieval issues on web and fixed bugs related to points of answers updates on web.</li>
                            <li>Worked on Taskbase app a versatile service providing mobile app, Designed UI for initial pages of including multiple sections for different services according to the prototype.</li>
                            <li>Designed dynamic UI for services sections using data binding on Taskbase app.</li>
                            <li>
                                Contributed on Notary project on Angular, by adding new web pages and designed data view.
                            </li>
                            <li>Implement CRUD operation on Angular web project and integrated basic API calls with .NET WEB API.</li>
                        </ul>
                    </div>

                    <ul>
                        <li style={{ listStyle: "disc" }}><h4>Internship &nbsp;&nbsp;(03/2022 - 05/20222)</h4></li>
                        <h5>PageUp Software Services Pvt. Ltd., Jabalpur</h5>
                        <div className="work-details">
                            <ul style={{ listStyle: "circle" }}>
                                <li>Acquired frontend development skills HTML, CSS, Bootstrap.</li>
                            </ul>
                        </div>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default Experience
