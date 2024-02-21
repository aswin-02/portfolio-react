import './Home.css';

function Tech() {
  return (
    <div id="techstack" class="container mt-5">
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
              <img src="./img/skills/java.png" alt="java logo" />
            </figure>
            <div class="skillcard-header">
              <p>Java</p>
            </div>
          </article>
        </div>
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src="./img/skills/HTML.png" alt="HTML logo" />
            </figure>
            <div class="skillcard-header">
              <p>HTML</p>
            </div>
          </article>
        </div>
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src="./img/skills/CSS.png" alt="Css logo" />
            </figure>
            <div class="skillcard-header">
              <p>CSS</p>
            </div>
          </article>
        </div>
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src="./img/skills/javascript.png" alt="javascript logo" />
            </figure>
            <div class="skillcard-header">
              <p>JavaScript</p>
            </div>
          </article>
        </div>
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src="./img/skills/Bootstrap.png" alt="Bootstrap logo" />
            </figure>
            <div class="skillcard-header">
              <p>Bootstrap</p>
            </div>
          </article>
        </div>
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src="./img/skills/nodejs.png" alt="Node Js logo" />
            </figure>
            <div class="skillcard-header">
              <p>Node Js</p>
            </div>
          </article>
        </div>
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src="./img/skills/react.png" alt="ReactJs logo" />
            </figure>
            <div class="skillcard-header">
              <p>ReactJs</p>
            </div>
          </article>
        </div>
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src="./img/skills/php.png" alt="php logo" />
            </figure>
            <div class="skillcard-header">
              <p>Php</p>
            </div>
          </article>
        </div>
        <div class="skillcard-list">
          <article class="skillcard">
            <figure class="skillcard-image">
              <img src="./img/skills/git.png" alt="git logo" />
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
