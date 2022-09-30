import React from "react";
import Contact from "../../components/Contact/Contact";
import NewProject from "../../components/newProject/NewProject";
import "./Contact.css";

const ContactPage = () => {
  return (
    <>
      <section className="about-part">
        <div className="container">
          <div className="about-part-details text-center">
            <h2>contact</h2>
            <div className="about-part-content">
              <div className="breadcrumbs">
                <div className="container">
                  <ol className="breadcrumb">
                    <li>
                      <a href="/">home</a>
                      <span>//</span>
                    </li>
                    <li>
                      <a href="/contact">contact</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <NewProject />
    </>
  );
};

export default ContactPage;
