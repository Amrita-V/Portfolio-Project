// import Certifications from "./components/Certifications/Certifications";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Introduction from "./components/intro-header/Introduction";
import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";


function App() {
    return (
    <div>
    <Topbar/>
    <Introduction/>
    <Projects/>
    <Skills/>
    <Education/>
    {/* <Certifications/> */}
    <Contact/>
    <Footer/>
   
    </div>
  );
}

export default App;
