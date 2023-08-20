import React from "react";
import "./projects.css";

const Projects = () => {
	return (
    <section id="projects-section">
		<div className="container project-container flex">
			<a href="https://github.com/Amrita-V/Digital_Clock">
				<div className="projects-card flex">
					<div className="project-img">
						<img src="assets/clockproject.png" />
					</div>
					<h3>Title</h3>
					<h3>Description</h3>
				</div>
			</a>
			<a href="https://github.com/Amrita-V/Digital_Clock">
				<div className="projects-card flex">
					<div className="project-img">
						<img src="assets/clockproject.png" />
					</div>
					<h3>Title</h3>
					<h3>Description</h3>
				</div>
			</a>
			<a href="https://github.com/Amrita-V/Digital_Clock">
				<div className="projects-card flex">
					<div className="project-img">
						<img src="assets/homepage.png" />
					</div>
					<h3>Title</h3>
					<h3>Description</h3>
				</div>
			</a>
		</div>
    </section>
	);
};

export default Projects;
