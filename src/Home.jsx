import './Home.css';

function Home() {
    return (
         
        <div className="container head-text ">
            <h1 className="display-3 hero mt-5">
                <code style={{ color: 'rgb(99, 99, 99)' }}>le</code> Aswin
            </h1>
            <h2 className="tech-txt hero dev">Web Developer</h2>
            <p className="hero hero-p" style={{ animation: 'textmoveside 2.5s forwards' }}>
                I enjoy developing high-quality, user-friendly websites.
            </p>
            <button className="button-connect"  >
                Connect
            </button>
            <button className="button-cv"  >
                Download CV
            </button>

            <p className="txt">hello world;</p>
        </div>
        
    );
}


export default Home;