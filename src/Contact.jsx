import "./Home.css";

function Contact() {
  return (
    <div class="anime-bg secondary-bg">
      <div class="d-flex justify-content-center">
        <div class="contact-card" id="contact">
          <h1>
            <b>Get in Touch</b>
          </h1>
          <p>
            I'm actively seeking new opportunities, and my inbox is always open.
            Whether you're interested in potential collaboration or simply wish
            to have a conversation, feel free to reach out.
            <br />
            I'll buy the coffee.
          </p>
          <li class="contact-buttons">
            <button class="button" onClick={() => window.open('https://www.linkedin.com/in/aswin05', '_blank')}>
              <img src="/img/linkedin.svg" height="25" width="25" />
            </button>
            <button class="button" onClick={() => window.open('https://github.com/aswin-02', '_blank')}>
              <img src="/img/github.svg" width="25" height="25" />
            </button>
            <button class="button" onClick={() => window.open('mailto:aswinvijay207.com')}>
              <img src="/img/envelope-fill.svg" height="25" width="25" />
            </button>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Contact;