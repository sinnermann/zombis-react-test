import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/images/logo/logo.png";

const Footer = () => {
  return (
    <>
      <section className="hm-footer">
        <div className="container">
          <div className="hm-footer-details">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title ">
                    <div className="logo">
                      <a href="index.html">
                        <img src={footerLogo} alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="hm-foot-para">
                    <p>
                      Lorem ipsum dolor sit amt conetur adcing elit. Sed do
                      eiusod tempor utslr. Ut laboris nisi ut aute irure dolor
                      in rein velit esse.
                    </p>
                  </div>
                  <div className="hm-foot-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
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
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className=" col-md-2 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>Useful Links</h4>
                  </div>
                  <div className="footer-menu ">
                    <ul className="">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="services.html">Service</a>
                      </li>
                      <li>
                        <a href="portfolio.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4>from the news</h4>
                  </div>
                  <div className="hm-para-news">
                    <a href="blog_single.html">
                      The Pros and Cons of Starting an Online Business.
                    </a>
                    <span>12th June 2017</span>
                  </div>
                  <div className="footer-line">
                    <div className="border-bottom"></div>
                  </div>
                  <div className="hm-para-news">
                    <a href="blog_single.html">
                      The Pros and Cons of Starting an Online Business.
                    </a>
                    <span>12th June 2017</span>
                  </div>
                </div>
              </div>
              <div className=" col-md-3 col-sm-6  col-xs-12">
                <div className="hm-footer-widget">
                  <div className="hm-foot-title">
                    <h4> Our Newsletter</h4>
                  </div>
                  <div className="hm-foot-para">
                    <p className="para-news">
                      Subscribe to our newsletter to get the latest News and
                      offers..
                    </p>
                  </div>
                  <div className="hm-foot-email">
                    <div className="foot-email-box">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="foot-email-subscribe">
                      <button type="button">go</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="foot-copyright pull-left">
                <p>
                  &copy; All Rights Reserved. Designed and Developed by
                  <a href="https://www.themesine.com">ThemeSINE</a>
                </p>
              </div>
            </div>
            <div className="col-sm-5">
              <div
                className="foot-menu pull-right
						"
              >
                <ul>
                  <li>
                    <a href="#">legal</a>
                  </li>
                  <li>
                    <a href="#">sitemap</a>
                  </li>
                  <li>
                    <a href="#">privacy policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="scroll-Top">
            <i
              className="fa fa-angle-double-up return-to-top"
              id="scroll-top"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Back to Top"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
