import './Home.css';

function Home() {
    return (
         
        <div className="container head-text" style={{marginTop:'7%'}}>
            <h1 className="display-3 hero mt-5">
                <code style={{ color: 'rgb(99, 99, 99)' }}>le</code> Aswin
            </h1>
            <h2 className=" hero dev">Web Developer</h2>
            <p className="hero hero-p" style={{ animation: 'textmoveside 2.5s forwards' }}>
                I enjoy developing high-quality, user-friendly websites.
            </p>
            <button className="button-connect" onClick={() => window.open('https://www.linkedin.com/in/aswin05', '_blank')} >
                Connect
            </button>
            <button className="button-cv"  onClick={() => window.open('https://drive.google.com/file/d/1_WIlpLQSkFy4y8ftQMRgPIwLGu_B4vR1/view?usp=sharing', '_blank')}>
                Download CV
            </button>

            <p className="txt">hello world;</p>
        </div>
        
    );
}


export default Home;