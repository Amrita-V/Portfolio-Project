import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Introduction from "./components/intro-header/Introduction";
import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div>
    <h1>Hello </h1>
    <button className="primary-button">Click</button>
    <button className="secondary-button">Click</button>

    <Topbar/>
    <Introduction/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
