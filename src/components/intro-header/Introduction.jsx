import './introduction.css'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

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
     <div className="intro-description flex">
      <h2>Hi There, I'm</h2>
      <h1>Amrita Vishwakarma</h1>
      <h2>Software <span style={{color:"white"}}>Developer...</span></h2>
      <button className='secondary-button'>About me</button>
      {/* <h2>Software <span ref={textRef}></span></h2> */}
      
    </div>
    </div>
    </section>
    
  )
}

export default Introduction
