import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Home.css";
import Home from "./Home.jsx";
import Tech from "./Tech.jsx";
import Slider from "./Slider.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";


function App() {
  return (
    <>
      <div className="bg">
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
                <button className="button">
                  <img src="./img/linkedin.svg" height="25" width="25" />
                </button>
                <button className="button">
                  <img src="./img/github.svg" width="25" height="25" />
                </button>
                <button className="button">
                  <img src="./img/envelope-fill.svg" height="25" width="25" />
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <Home />
      </div>
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

 
export default App;
