import React from "react";
import "./Services.css";
import Services from "../../components/services/Services";
import NewProject from "../../components/newProject/NewProject";

const ServicesPage = () => {
  return (
    <>
      <section class="about-part service-part">
        <div class="container">
          <div class="about-part-details text-center">
            <h2>service</h2>
            <div class="about-part-content">
              <div class="breadcrumbs">
                <div class="container">
                  <ol class="breadcrumb">
                    <li>
                      <a href="index.html">home</a>
                      <span>//</span>
                    </li>
                    <li>
                      <a href="service.html">service</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <NewProject />
    </>
  );
};

export default ServicesPage;
