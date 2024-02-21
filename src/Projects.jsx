import "./project.css";
import moviefetcher from "../img/moviefetcher.jpeg";
import srit from "../img/srit2.jpeg";
import ecommerce from "../img/ecommerce.jpeg";
import instagram from "../img/instagram2.png";



function Projects() {
  return (
    <div id="techstack" class="container mt-5 mb-5 pb-5">
      <h1 class="text-capitalize tech-txt">
        My <works>Works</works>
      </h1>
      <br />
       

      <div class="projectgrid-container">
        <div class="projectcard-list">
          <article class="projectcard">
            <figure class="projectcard-image">
                <img src={moviefetcher} alt="java logo" />
            </figure>
            <div class="projectcard-header">
              <p>Movie Fetcher</p>
            </div>
            <div className="d-flex justify-content-around">
            <button id="goto">goto</button>
            <button id="code">code</button>
            </div>
          </article>
        </div>
        <div class="projectcard-list">
          <article class="projectcard">
            <figure class="projectcard-image">
              <img src={srit} alt="java logo" />
            </figure>
            <div class="projectcard-header">
              <p>Institutional webpage</p>
            </div>
            <div className="d-flex justify-content-around">
            <button id="goto">goto</button>
            </div>
          </article>
        </div>
        <div class="projectcard-list">
          <article class="projectcard">
            <figure class="projectcard-image">
              <img src={ecommerce} alt="java logo" />
            </figure>
            <div class="projectcard-header">
              <p>Online Grocery Store</p>
            </div>
            <div className="d-flex justify-content-around">
            <button id="code">code</button>
            </div>
          </article>
        </div>
        <div class="projectcard-list">
          <article class="projectcard">
            <figure class="projectcard-image">
              <img src={instagram} alt="java logo" />
            </figure>
            <div class="projectcard-header">
              <p>Instagram Login</p>
            </div>
            <div className="d-flex justify-content-around">
            <button id="code">code</button>
            </div>
          </article>
        </div>
         
      </div>
    </div>
  );
}

export default Projects;
