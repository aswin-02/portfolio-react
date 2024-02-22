import './Home.css';
import java from './img/java.png';
import html from './img/html.png';
import css from './img/css.png';
import javascript from './img/javascript.png';
import bootstrap from './img/bootstrap.png';
import node from './img/nodejs.png';
import react from './img/react.png';
import php from './img/php.png';
import git from './img/git.png';


function Tech() {
  return (
    <div id="techstack" class="container">
      <h1 class="text-capitalize tech-txt">
        Tech <works>stack</works>
      </h1>
      <br />
      <p class="hero-p">
        These are the tools, languages, and frameworks I use on a regular basis.
      </p>

      <div class="grid-container">
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src={java} alt="java logo" />
            </figure>
            <div class="skillcard-header">
              <p>Java</p>
            </div>
          </article>
        </div>
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src={html} alt="HTML logo" />
            </figure>
            <div class="skillcard-header">
              <p>HTML</p>
            </div>
          </article>
        </div>
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src={css} alt="Css logo" />
            </figure>
            <div class="skillcard-header">
              <p>CSS</p>
            </div>
          </article>
        </div>
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src={javascript} alt="javascript logo" />
            </figure>
            <div class="skillcard-header">
              <p>JavaScript</p>
            </div>
          </article>
        </div>
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src={bootstrap} alt="Bootstrap logo" />
            </figure>
            <div class="skillcard-header">
              <p>Bootstrap</p>
            </div>
          </article>
        </div>
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src={node} alt="Node Js logo" />
            </figure>
            <div class="skillcard-header">
              <p>Node Js</p>
            </div>
          </article>
        </div>
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src={react} alt="ReactJs logo" />
            </figure>
            <div class="skillcard-header">
              <p>ReactJs</p>
            </div>
          </article>
        </div>
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src={php} alt="php logo" />
            </figure>
            <div class="skillcard-header">
              <p>Php</p>
            </div>
          </article>
        </div>
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src={git} alt="git logo" />
            </figure>
            <div class="skillcard-header">
              <p>Git</p>
            </div>
          </article>
        </div>
      </div>
       
    </div>
  );
}

export default Tech;
