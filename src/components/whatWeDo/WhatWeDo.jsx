import React from "react";
import "./WhatWeDo.css";
import { WhatWeDoPart } from "../../helpers/WhatWeDoPart";

const WhatWeDo = () => {
  return (
    <section className="we-do">
      <div className="container">
        <div className="we-do-details">
          <div className="section-header text-center">
            <h2>what we do</h2>
            <p>
              Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="we-do-carousel">
            <div className="row">
              {WhatWeDoPart.map((whatWeDo) => (
                <div className="col-sm-4 col-xs-12">
                  <div className="single-we-do-box text-center">
                    <div className="we-do-description">
                      <div className="we-do-info">
                        <div className="we-do-img">
                          <img
                            src={whatWeDo.image}
                            alt="image of consultency"
                          />
                        </div>
                        <div className="we-do-topics">
                          <h2>
                            <a href="#">{whatWeDo.title}</a>
                          </h2>
                        </div>
                      </div>
                      <div className="we-do-comment">
                        <p>{whatWeDo.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
