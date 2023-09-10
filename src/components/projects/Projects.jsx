import React, { useState } from "react";
import "./projects.css";
import { projects } from "../../Data/data";

const Projects = () => {
	return (

		<>
		    <section id="projects-section">
		<h2 style={{textAlign:"center",textTransform:"uppercase"}}>Projects</h2>
		<div className="container project-container flex">
			{
				projects.map((project,index)=>
				{

				return(
					<a href={project.githunLink} key={index}>			
				<div className="projects-card flex"  >
					<div className="project-img">
						<img src={project.image} />
					</div>
					<div className="project-technology flex">
						{
							project.technologies.map((technology,index)=>
							{
								return (<div className="project-tool" key={index}>
								<h6>{technology}</h6></div>)
														})
						}
					
					{/* <div className="project-tool">
					<h6>CsS</h6></div><div className="project-tool">
					<h6>javascript</h6></div><div className="project-tool">
					<h6>bootstrap</h6></div> */}
					</div>
					<h4>{project.title}</h4>
					<p>{project.description}</p>
				</div>
				</a>

				)
			})
		}
				</div>
    </section>
	</>

	);
};

export default Projects;
