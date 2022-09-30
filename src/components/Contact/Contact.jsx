import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-details">
          <div className="section-header contact-head  text-center">
            <h2>contact us</h2>
            <p>
              Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="contact-content">
            <div className="row">
              <div className="col-sm-offset-1 col-sm-5">
                <div className="single-contact-box">
                  <div className="contact-right">
                    <div className="contact-adress">
                      <div className="contact-office-address">
                        <h3>contact info</h3>
                        <p>125, Park street avenue, Brocklyn, Newyork.</p>
                        <div className="contact-online-address">
                          <div className="single-online-address">
                            <i className="fa fa-phone"></i>
                            +11253678958
                          </div>

                          <div className="single-online-address">
                            <i className="fa fa-envelope-o"></i>
                            <span>info@mail.com</span>
                          </div>
                        </div>
                      </div>
                      <div className="contact-office-address">
                        <h3>social partner</h3>
                        <div className="contact-icon">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-google-plus"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-linkedin"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-twitter"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="single-contact-box">
                  <div className="contact-form">
                    <h3>Leave us a Massage Here</h3>
                    <form>
                      <div className="row">
                        <div className="col-sm-6 col-xs-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="firstname"
                              placeholder="First Name"
                              name="firstname"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="lastname"
                              placeholder="Last Name"
                              name="laststname"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6 col-xs-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Email"
                              name="email"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              placeholder="Phone"
                              name="phone"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <textarea
                              v="form-control"
                              rows="7"
                              id="comment"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="single-contact-btn pull-right">
                            <button className="contact-btn" type="button">
                              send message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
