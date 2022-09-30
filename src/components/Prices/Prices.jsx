import React from "react";
import "./Prices.css";

const Prices = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="pricing-details">
          <div className="section-header text-center">
            <h2 className="price-head">our pricing table</h2>
            <p>
              Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="pricing-content">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="pricing-box">
                  <div className="pricing-header">
                    <h2>basic</h2>
                    <h3 className="packeg_p">
                      <span>$</span>99
                    </h3>
                    <p>monthly</p>
                  </div>
                  <ul className="plan-lists">
                    <li>01 user</li>
                    <li>01 project</li>
                    <li>01 advisor team</li>
                    <li>complete statistics</li>
                    <li>E-Mail support</li>
                  </ul>

                  <div className="project-btn pricing-btn text-center">
                    <a href="project.html" className="project-view">
                      Sign Up Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="pricing-box">
                  <div className="pricing-header">
                    <h2>standard</h2>
                    <h3 className="packeg_p">
                      <span>$</span>299
                    </h3>
                    <p>monthly</p>
                  </div>
                  <ul className="plan-lists">
                    <li>05 user</li>
                    <li>05 project</li>
                    <li>05 advisor team</li>
                    <li>complete statistics</li>
                    <li>full support</li>
                  </ul>

                  <div className="project-btn pricing-btn text-center">
                    <a href="project.html" className="project-view">
                      Sign Up Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="pricing-box">
                  <div className="pricing-header">
                    <h2>advanced</h2>
                    <h3 className="packeg_p">
                      <span>$</span>499
                    </h3>
                    <p>monthly</p>
                  </div>
                  <ul className="plan-lists">
                    <li>10 user</li>
                    <li>10 project</li>
                    <li>10 advisor team</li>
                    <li>complete statistics</li>
                    <li>full support</li>
                  </ul>

                  <div className="project-btn pricing-btn text-center">
                    <a href="project.html" className="project-view">
                      Sign Up Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="pricing-box">
                  <div className="pricing-header">
                    <h2>unlimited</h2>
                    <h3 className="packeg_p">
                      <span>$</span>1099
                    </h3>
                    <p>monthly</p>
                  </div>
                  <ul className="plan-lists">
                    <li>unlimited user</li>
                    <li>unlimited project</li>
                    <li>unlimited advisor team</li>
                    <li>complete statistics</li>
                    <li>full support</li>
                  </ul>

                  <div className="project-btn pricing-btn text-center">
                    <a href="project.html" className="project-view">
                      Sign Up Now
                    </a>
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

export default Prices;
