import React from "react";
import "./Services.css";
import { OurServices } from "../../helpers/OurServices";

const Services = () => {
  return (
    <section className="service">
      <div className="container">
        <div className="service-details">
          <div className="section-header text-center">
            <h2>our services</h2>
            <p>
              Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="service-content-one">
            <div className="row">
              {OurServices.map((ourService) => (
                <div className="col-sm-4 col-xs-12">
                  <div className="service-single text-center">
                    <div className="service-img">
                      <img src={ourService.image} alt="image of service" />
                    </div>
                    <div className="service-txt">
                      <h2>
                        <a href="#">{ourService.title}</a>
                      </h2>
                      <p>{ourService.text}</p>
                      <a href="#" className="service-btn">
                        learn more
                      </a>
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

export default Services;
