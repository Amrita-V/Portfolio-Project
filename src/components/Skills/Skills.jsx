"use client";
import React from "react";
import "./skills.css";
import { skills } from "../../Data/data";
const Skills = () => {
	return (
		<section id="skill-section" >
			<div className="container flex">
				<div className="skill-container flex">

					{skills.map((category) => {
						return(

						<div className="skill-list-box flex">
							{
								category.skills.map((skill) => {
									return(<div className="skill-box flex">
										<img src={skill.image} />
										<div className="skill-title"><h5>{skill.name}</h5></div>
										
									</div>)
								})

							}

						</div>)
					})
					}

				</div>
				<div className="right-container">
				<h2 className="section-heading" style={{color:"whitesmoke"}}>SKILLS</h2>
					<img src="./assets/skillimg.png" alt="" />
				</div>
			</div>
		</section>
	);
};

export default Skills;
