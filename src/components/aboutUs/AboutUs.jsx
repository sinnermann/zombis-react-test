import React from "react";
import "./AboutUs.css";
import aboutImage from "../../assets/images/about/about-part.jpg";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us-content">
          <div className="row">
            <div className="col-sm-6">
              <div className="single-about-us">
                <div className="about-us-txt">
                  <h2>about us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse.
                  </p>
                  <div className="project-btn">
                    <a href="#" className="project-view">
                      learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="single-about-us">
                <div className="about-us-img">
                  <img src={aboutImage} alt="about images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
