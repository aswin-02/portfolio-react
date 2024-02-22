import React, { useEffect, useRef } from "react";
import "./Home.css";
import linkedin from "./img/linkedin.svg";
import github from "./img/github.svg";
import mail from "./img/envelope-fill.svg";
import CLOUDS from "vanta/dist/vanta.clouds.min";

function Contact() {
  useEffect(() => {
    CLOUDS({
      el: "#vanta2",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      skyColor: 0x9604bb,
      cloudColor: 0xdbadde,
      cloudShadowColor: 0x501850,
    });
  }, []);

  return (
    <div>
      <div className="bg" id="vanta2" style={{ width: "100%" }}>
        <div class="anime-bg secondary-bg">
          <div class="d-flex justify-content-center">
            <div class="contact-card" id="contact">
              <h1>
                <b>Get in Touch</b>
              </h1>
              <p>
                I'm actively seeking new opportunities, and my inbox is always
                open. Whether you're interested in potential collaboration or
                simply wish to have a conversation, feel free to reach out.
                <br />
                I'll buy the coffee.
              </p>
              <li class="contact-buttons">
                <button
                  class="button"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/aswin05", "_blank")
                  }
                >
                  <img src={linkedin} height="25" width="25" />
                </button>
                <button
                  class="button"
                  onClick={() =>
                    window.open("https://github.com/aswin-02", "_blank")
                  }
                >
                  <img src={github} width="25" height="25" />
                </button>
                <button
                  class="button"
                  onClick={() => window.open("mailto:aswinvijay207.com")}
                >
                  <img src={mail} height="25" width="25" />
                </button>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
