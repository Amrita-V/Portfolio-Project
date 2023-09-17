import React from "react";
import "./certification.css";
import { certificates } from "../../Data/data";

const Certifications = () => {
	return (
		<section id="certification-section">
			<h2 className="section-heading" style={{color:"white"}}>CERTIFICATION</h2>
			<div className="container certificate-container flex">
				{certificates.map((certificate, id) => {
					return (<div className="certificate-box" key={id}>
						<img src={certificate.image} />
						<h4>{certificate.title}</h4>
					</div>
					)
				})}
			</div>
		</section>
	);
};

export default Certifications;
