import React from "react";
import './skills.css';
const Skills = () => {
	return (
		<section id="skills-section">
			<div className="container skills-container flex" >
				<div className="left-box flex">
          <div>
          <h3 className="skill-heading">Web Technologies</h3>
       <ul className="skill-list flex">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>SQL</li>
       </ul>
       </div>
       <div>
        <h3 className="skill-heading">Programming Language</h3>
        <ul className="skill-list flex">
        <li>C#</li>
        <li>Python basics</li>
        </ul>
       </div>
       <div>
       <h3 className="skill-heading">Other Tools</h3>
        <ul className="skill-list flex">
        <li>Git & GitHub</li>
        <li>VSCode</li>
        <li>Visual Studio</li>
        </ul>
       </div>
        </div>
				<div className="right-box">
                <h2 className="heading-text">SKILLS</h2>
        <img src="./assets/skillimg.png"/>
        </div>
			</div>
		</section>
	);
};

export default Skills;
