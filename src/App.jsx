import "./Home.css"; 
import Home from "./Home.jsx";
import Tech from "./Tech.jsx";
import Slider from "./Slider.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import linkedin from "./img/linkedin.svg";
import github from "./img/github.svg";
import mail from "./img/envelope-fill.svg";


function App() {
  return (
    <>
      <Nav />
      <About />
      <Slider />
      <Tech />
      <Slider />
      <Projects/> 
      <Contact />
      <div className="d-flex justify-content-center">
        <div>
          <p className="dev text-center pt-2">Designed and Developed by Aswin</p>
        </div>
      </div>
    </>
  );
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

 



const Nav = () => {
  return (
    <div className="bg-img">
        <nav className="  navbar navbar-expand-sm navbar-light ">
          <button
            className="navbar-toggler foc-us"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="nav navbar-nav d-inline-flex">
              <a className="nav-link hov font-weight-bold" href="#techstack">
                SKILLS
              </a>
              <a className="nav-link hov font-weight-bold" href="#projects">
                PROJECTS
              </a>
              <a className="nav-link hov font-weight-bold" href="#about">
                ABOUT
              </a>
              <a className="nav-link hov font-weight-bold" href="#contact">
                CONTACT
              </a>

              <li className="nav-link">
                <button className="button" onClick={() => window.open('https://www.linkedin.com/in/aswin05', '_blank')}>
                  <img src={linkedin} height="25" width="25" />
                </button>
                <button className="button"   onClick={() => window.open('https://github.com/aswin-02', '_blank')}>
                  <img src={github} width="25" height="25" />
                </button>
                <button className="button" onClick={() => window.open('mailto:aswinvijay207.com')}>
                  <img src={mail} height="25" width="25" />
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <Home />
      </div>
  );
}


export default App;
