import './introduction.css'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import { bio } from '../../Data/data'

const Introduction = () => {

  // const textRef = useRef();
  // useEffect(()=>
  // {
  //   init(textRef.current, 
  //     { showCursor: false, 
  //       backDelay:1500,
  //       backSpeed:60,
  //       strings: ['Developer'],
  //      });
  // },[]);
  return (
    <section className="introduction-section" id='introduction'>
    <div className='container introduction-container flex'>
      
     <div className="image-box-1">
     <div className="image-box-2 flex">
        
        <img src="assets/mybitmoji.jpeg" alt='image' className='myimage'/>
     </div>
     </div>
          
    
      {
        bio.map((data,id) =>{
          return (
            <div className="intro-description flex" key={id}>
            <h2>Hi There, I'm</h2>
            <h1>{data.name}</h1>
            <h2>{data.role}</h2>
            {/* <h2>Software <span style={{color:"white"}}>Engineer...</span></h2> */}
            <div className="link-button">
            <a href="assets/AmritaVishwakarma_Resume.pdf" target='_blank' className='secondary-button'>Download CV</a>
            <a href={data.linkedin} className='secondary-button'>Linkedin</a> 
            </div> 
            </div>
 
          );
        })

      }
      {/* <h2>Hi There, I'm</h2>
      <h1>Amrita Vishwakarma</h1>
      <h2>Software <span style={{color:"white"}}>Engineer...</span></h2>
      <div className="link-button">
      <a href="assets/AmritaVishwakarma_Resume.pdf" className='secondary-button'>Download CV</a>
      <a href="" className='secondary-button'>Linkedin</a> */}
      {/* </div> */}
      {/* <h2>Software <span ref={textRef}></span></h2> */}
      
   
    </div>
    </section>
    
  )
}

export default Introduction
