import React from "react";
import "./NewProject.css";

const NewProject = () => {
  return (
    <section id="new-project" className="new-project">
      <div className="container">
        <div className="new-project-details">
          <div className="row">
            <div className="col-md-10 col-sm-8">
              <div className="single-new-project">
                <h3>Want to start a new project with us? Let’s Start!</h3>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="single-new-project">
                <a href="#" className="slide-btn">
                  start now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProject;
