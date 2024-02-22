import "./project.css"; 

import moviefetcher from "./img/moviefetcher.jpeg";
import srit from "./img/srit2.jpeg";
import ecommerce from "./img/ecommerce.jpeg";
import instagram from "./img/instagram2.png";

function Projects() {
  return (
    <div id="projects" class="container   mb-5 pb-5">
      <h1 class="text-capitalize tech-txt">
        My <works>Works</works>
      </h1> 

      <div class="projectgrid-container">
        <div class="projectcard-list">
          <article class="projectcard">
            <figure class="projectcard-image">
              <div className="d-flex justify-content-center ">
                <p className="image-text text-center">
                  A website develped with react ,which previews real-time
                  details from TMDB, highlighting my front-end and API
                  integration skills.
                </p>
              </div>
              <img src={moviefetcher} alt="moviefetcher logo" />
            </figure>
            <div class="projectcard-header">
              <p>Movie Fetcher</p>
            </div>
            <div className="d-flex justify-content-around pb-2">
            {/* <button className="button-goto"  onClick={() => window.open('https://moviefetcher-bfcc8.web.app/', '_blank')}>goto</button> */}
              <button className="button-code" onClick={() => window.open('https://github.com/aswin-02/moviefetcher', '_blank')} >code</button>
            </div>
          </article>
        </div>
        <div class="projectcard-list">
          <article class="projectcard">
            <figure class="projectcard-image">
              <div className="d-flex justify-content-center ">
                <p className="image-text text-center">
                  Contributed to web pages on our institution's official site
                  within the Research cluster domain.
                </p>
              </div>
              <img src={srit} alt="srit logo" />
            </figure>
            <div class="projectcard-header">
              <p>Institutional webpage</p>
            </div>
            <div className="d-flex justify-content-around pb-2">
              <button className="button-goto"  onClick={() => window.open('https://srit.org/research-index.html','_blank')} >goto</button>
            </div>
          </article>
        </div>
        <div class="projectcard-list">
          <article class="projectcard">
            <figure class="projectcard-image">
              <div className="d-flex justify-content-center ">
                <p className="image-text text-center">
                  A prototype that is developed to experience the convenience of
                  easy-to-use online grocery system.
                </p>
              </div>
              <img src={ecommerce} alt="ecommerce logo" />
            </figure>
            <div class="projectcard-header">
              <p>Online Grocery Store</p>
            </div>
            <div className="d-flex justify-content-around pb-2">
              <button className="button-code"  onClick={()=>window.open('https://github.com/aswin-02/simple-grocery-store','_blank')}>code</button>
            </div>
          </article>
        </div>
        <div class="projectcard-list">
          <article class="projectcard">
            <figure class="projectcard-image">
              <div className="d-flex justify-content-center ">
                <p className="image-text text-center">
                  A well-constructed replica of Instagram's login page designed
                  to deceive users due to its identical visual resemblance.
                </p>
              </div>
              <img src={instagram} alt="instagram logo" />
            </figure>
            <div class="projectcard-header">
              <p>Instagram Login</p>
            </div>
            <div className="d-flex justify-content-around pb-2">
              <button className="button-code" onClick={()=>window.open('https://github.com/aswin-02/INSTA_LOGIN','_blank')}>code</button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Projects;
