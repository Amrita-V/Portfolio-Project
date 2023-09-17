import React, { useState } from "react";
import "./projects.css";
import { projects } from "../../Data/data";

const Projects = () => {
	return (

		<>
		   <section id="project-section">
    <h2 className="section-heading">PROJECTS</h2>
<div className="container project-container flex">
	{
		projects.map((project) =>
		{
			return(
				<div className="projects-card flex"  >
				<div className="project-img">
					<img src={project.image} />
				</div>
				<div class="project-technology flex">
					{
						project.technologies.map((technology)=>
						{
							return( <h6  className="project-tool">{technology}</h6>)
						})
					}
				</div>
			  <hr className="project-hr"/>
				<h4>{project.title}</h4>
				<div className="project-link flex">
					<a href={project.githunLink} target="_blank"><img src="./assets/skills/github.png"/></a>
					<a href={project.live_link} target="_blank"><img src="./assets/search.png" alt=""/></a>
				</div>
			</div>

			)
		})
	}
  
	</div>
	</section>

	</>

	);

	};
export default Projects;
