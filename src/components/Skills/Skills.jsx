"use client";
import React from "react";
import "./skills.css";
import { skillData } from "../../Data/data";
const Skills = () => {
	return (
		<section id="skills-section">
			<div className="container skills-container flex">
				<div className="left-box flex">
					{/* <div className="skill-box"> */}
						{skillData.map((skill, id) => {
							return (
								<div className="skill-box" key={id}>
									<h3 className="skill-heading" >
										{skill.name}
									</h3>
									<ul className="skill-list flex">
										{skill.languages.map((element, index) => {
											return <li key={index}>{element}</li>;
										})}
									</ul>
								</div>
							);
						})}
					{/* </div> */}
					{/* <div className="skill-box">
						<h3 className="skill-heading">Programming Language</h3>
						<ul className="skill-list flex">
							<li>C#</li>
							<li>Python basics</li>
						</ul>
					</div>
					<div className="skill-box">
						<h3 className="skill-heading">Other Tools</h3>
						<ul className="skill-list flex">
							<li>Git & GitHub</li>
							<li>VSCode</li>
							<li>Visual Studio</li>
						</ul>
					</div> */}
				</div>
				<div className="right-box">
					<h2 className="heading-text">SKILLS</h2>
					<img src="./assets/skillimg.png" />
				</div>
			</div>
		</section>
	);
};

export default Skills;
