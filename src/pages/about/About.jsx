import React from "react";
import "./About.css";
import about_img1 from "../../assets/images/about/ab1.jpg";
import about_img2 from "../../assets/images/about/ab2.jpg";
import NewProject from "../../components/newProject/NewProject";
import Statistics from "../../components/statistics/Statistics";
import Testimonials from "../../components/testimonials/Testimonials";
import WhatWeDo from "../../components/whatWeDo/WhatWeDo";

const About = () => {
  return (
    <>
      <section className="about-part">
        <div className="container">
          <div className="about-part-details text-center">
            <h2>about us</h2>
            <div className="about-part-content">
              <div className="breadcrumbs">
                <div className="container">
                  <ol className="breadcrumb">
                    <li>
                      <a href="index.html">home</a>
                      <span>//</span>
                    </li>
                    <li>
                      <a href="about.html">about</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="about-history">
        <div className="container">
          <div className="about-history-content">
            <div className="row">
              <div className="col-md-5 col-sm-12">
                <div className="single-about-history">
                  <div className="about-history-img">
                    <img src={about_img1} alt="about" />
                  </div>
                </div>
              </div>

              <div className="col-md-offset-1 col-md-6 col-sm-12">
                <div className="single-about-history">
                  <div className="about-history-txt">
                    <h2>our history</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adiping elit, sed
                      do eiusmod tempor incidd ut labore rhei et dolore magna
                      aliqua. Ut enim ad veniam, quis laboris nisi ut aliquip ex
                      ea commodo. Duis aute irure dolor in repre voluptate in
                      the velit esse.
                    </p>

                    <div className="main-timeline">
                      <div className="row">
                        <div className="col-md-2 col-sm-2">
                          <div className="experience-time">
                            <h3>2002</h3>
                          </div>
                        </div>
                        <div className="col-md-10 col-sm-10">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 clclassNameass="title">
                                <span>
                                  <i
                                    className="fa fa-circle-o"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h4>

                              <ul className="description">
                                <li>
                                  Duis aute irure dolor in reprehenderit in the
                                  voluptate velit esse cillum dolore eu ugiat
                                  nulla pariatur cupiat non proident.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-2 col-sm-2">
                          <div className="experience-time">
                            <h3>2007</h3>
                          </div>
                        </div>
                        <div className="col-md-10 col-sm-10">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                <span>
                                  <i
                                    className="fa fa-circle-o"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h4>

                              <ul className="description">
                                <li>
                                  Duis aute irure dolor in reprehenderit in the
                                  voluptate velit esse cillum dolore eu ugiat
                                  nulla pariatur cupiat non proident.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-2 col-sm-2">
                          <div className="experience-time">
                            <h3>2012</h3>
                          </div>
                        </div>
                        <div className="col-md-10 col-sm-10">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                <span>
                                  <i
                                    className="fa fa-circle-o"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h4>

                              <ul className="description">
                                <li>
                                  Duis aute irure dolor in reprehenderit in the
                                  voluptate velit esse cillum dolore eu ugiat
                                  nulla pariatur cupiat non proident.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-2 col-sm-2">
                          <div className="experience-time">
                            <h3>2016</h3>
                          </div>
                        </div>
                        <div className="col-md-10 col-sm-10">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                <span>
                                  <i
                                    className="fa fa-circle-o"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </h4>

                              <ul className="description">
                                <li>
                                  Duis aute irure dolor in reprehenderit in the
                                  voluptate velit esse cillum dolore eu ugiat
                                  nulla pariatur cupiat non proident.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="about-vission-content">
                <div className="col-md-6 col-sm-12">
                  <div className="single-about-history">
                    <div className="about-history-txt">
                      <h2>vision and mission</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adiping elit,
                        sed do eiusmod tempor incidd ut labore rhei et dolore
                        magna aliqua. Ut enim ad veniam, quis laboris nisi ut
                        aliquip ex ea commodo. Duis aute irure dolor in repre
                        voluptate in the velit esse.
                      </p>

                      <div className="main-timeline  xtra-timeline">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="timeline timeline-ml-20">
                              <div className="timeline-content">
                                <h4 className="title">
                                  <span>
                                    <i
                                      className="fa fa-circle-o"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </h4>

                                <ul className="description">
                                  <li>
                                    Duis aute irure dolor in reprehenderit in
                                    the voluptate velit esse cillum dolore eu
                                    ugiat nulla pariatur cupiat non proident.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-12">
                            <div className="timeline timeline-ml-20">
                              <div className="timeline-content">
                                <h4 className="title">
                                  <span>
                                    <i
                                      className="fa fa-circle-o"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </h4>

                                <ul className="description">
                                  <li>
                                    Duis aute irure dolor in reprehenderit in
                                    the voluptate velit esse cillum dolore eu
                                    ugiat nulla pariatur cupiat non proident.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="timeline timeline-ml-20">
                              <div className="timeline-content">
                                <h4 className="title">
                                  <span>
                                    <i
                                      className="fa fa-circle-o"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </h4>

                                <ul className="description">
                                  <li>
                                    Duis aute irure dolor in reprehenderit in
                                    the voluptate velit esse cillum dolore eu
                                    ugiat nulla pariatur cupiat non proident.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-offset-1 col-md-5 col-sm-12">
                  <div className="single-about-history">
                    <div className="about-history-img">
                      <img src={about_img2} alt="about" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Statistics />
      <WhatWeDo />
      <Testimonials />
      <NewProject />
    </>
  );
};

export default About;
