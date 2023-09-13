import React from "react";
import "./certification.css";
import { certificates } from "../../Data/data";

const Certifications = () => {
	return (
		<section className="certification-section flex">
			{/* <h1 className="heading">Certificates</h1> */}
			{certificates.map((certificate, id) => {
			return(	<div className="certificate" key={id}>
					<img
						src={certificate.image}
						className="certificate-img"
					/>
				</div>
				)
			})}
			
		</section>
	);
};

export default Certifications;

// import React, { useState } from "react";
// import "./certification.css";
// // import { certificateData} from 'data.js';
// const Certifications = () => {
//   const [currentSlide, setCurrentSlider] = useState(0);

//   const handleClick = (way) =>{
//     way === "left" ? setCurrentSlider(currentSlide > 0 ? currentSlide - 1 : 2) :
//     setCurrentSlider(currentSlide < crtData.length-1 ? currentSlide + 1 : 0);
//   };
// 	return (
// 		<section className="certification-section flex" id="certification">
// 			<div className="slider" style={{transform : 'translateX(-${currentSlide * 100}vw)'}}>
// 				{crtData.map((d) => (
// 					<div className="certificate-container">
// 						<div className="certificate-box flex">
//             {/* <img src="{d.img}" /> */}
//               <h1>{d.title}</h1>
// 						</div>
// 					</div>
// 				))}
// 			</div>

// 			<img src="assets/arrow.png" className="arrow arrow-left" onClick={() => handleClick("left")} />
// 			<img src="assets/arrow.png" className="arrow arrow-right" onClick={() => handleClick()}/>
// 		</section>
// 	);
// };

// export default Certifications;

// {
// 	/* <section
// className="certification-section flex"
// id="certification"
// >
// <div className="container">
//   <div className="certificate-box flex">
//     <img src="assets/oraclecertificate.jpg" className="certificate-img"/>
//   </div>

// </div>

// <img src="assets/arrow.png" className="arrow arrow-left" />
// <img src="assets/arrow.png" className="arrow arrow-right" />

// </section> */
// }

// {
// 	/* <section
// className="certification-section card-container flex"
// id="certification"
// >
// <div className="slider">
// <div className="card-left ">
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ab
//     nihil optio incidunt consequatur obcaecati!Fnmvndmnb dvfmn dnvvjdf
//     dnvjs dsdffkjhsk jsdhfjs
//   </p>
// </div>
// <div className="card-right flex transparent-card">
//   <img
//     src="assets/oraclecertificate.jpg"
//     alt="image"
//     className="certificate-img"
//   />
// </div>
// </div>
// <img src="assets/arrow.png" className="arrow arrow-left" />
// <img src="assets/arrow.png" className="arrow arrow-right" />

// </section> */
// }
