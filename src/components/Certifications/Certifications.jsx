import React from "react";
import "./certification.css";

const Certifications = () => {
	return (
		<section
			className="certification-section flex"
			id="certification"
		>
      <div className="container">
        <div className="certificate-box flex">
          <img src="assets/oraclecertificate.jpg" className="certificate-img"/>
        </div>
        
      </div>
     
			<img src="assets/arrow.png" className="arrow arrow-left" />
			<img src="assets/arrow.png" className="arrow arrow-right" />
     
		</section>
	);
};

export default Certifications;



{/* <section
className="certification-section card-container flex"
id="certification"
>
<div className="slider">
<div className="card-left ">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ab
    nihil optio incidunt consequatur obcaecati!Fnmvndmnb dvfmn dnvvjdf
    dnvjs dsdffkjhsk jsdhfjs
  </p>
</div>
<div className="card-right flex transparent-card">
  <img
    src="assets/oraclecertificate.jpg"
    alt="image"
    className="certificate-img"
  />
</div>
</div>
<img src="assets/arrow.png" className="arrow arrow-left" />
<img src="assets/arrow.png" className="arrow arrow-right" />

</section> */}