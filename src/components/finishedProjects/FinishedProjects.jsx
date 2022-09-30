import React from "react";
import "./FinishedProjects.css";
import projectOne from "../../assets/images/project/project1.jpg";
import projectTwo from "../../assets/images/project/project2.jpg";
import projectThree from "../../assets/images/project/project3.jpg";
import projectFour from "../../assets/images/project/project4.jpg";
import projectFive from "../../assets/images/project/project5.jpg";

const FinishedProjects = () => {
  return (
    <section id="project" className="project">
      <div className="container">
        <div className="project-details">
          <div className="project-header text-left">
            <h2>Our Finished Projects</h2>
            <p>Pallamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="project-content">
            <div className="gallery-content">
              <div className="isotope">
                <div className="row">
                  <div className=" col-md-4 col-sm-12">
                    <div className="item big-height">
                      <img src={projectOne} alt="portfolio image" />
                      <div className="isotope-overlay">
                        <a href="#">
                          <span className="lnr lnr-link"></span>
                        </a>
                        <h3>
                          <a href="#">aquisition plan</a>
                        </h3>
                        <p>busisness planning</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-12">
                    <div className="row">
                      <div className="col-sm-6 col-xs-12">
                        <div className="item">
                          <img src={projectTwo} alt="portfolio image" />
                          <div className="isotope-overlay">
                            <a href="#">
                              <span className="lnr lnr-link"></span>
                            </a>
                            <h3>
                              <a href="#">aquisition plan</a>
                            </h3>
                            <p>busisness planning</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-12">
                        <div className="item">
                          <img src={projectThree} alt="portfolio image" />
                          <div className="isotope-overlay">
                            <a href="#">
                              <span className="lnr lnr-link"></span>
                            </a>
                            <h3>
                              <a href="#">aquisition plan</a>
                            </h3>
                            <p>busisness planning</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-xs-12">
                        <div className="item">
                          <img src={projectFour} alt="portfolio image" />
                          <div className="isotope-overlay">
                            <a href="#">
                              <span className="lnr lnr-link"></span>
                            </a>
                            <h3>
                              <a href="#">aquisition plan</a>
                            </h3>
                            <p>busisness planning</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-12">
                        <div className="item">
                          <img src={projectFive} alt="portfolio image" />
                          <div className="isotope-overlay">
                            <a href="#">
                              <span className="lnr lnr-link"></span>
                            </a>
                            <h3>
                              <a href="#">aquisition plan</a>
                            </h3>
                            <p>busisness planning</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-btn text-center">
          <a href="project.html" className="project-view">
            view all
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinishedProjects;
