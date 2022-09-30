import React from "react";
import "./Statistics.css";
import statisticImage from "../../assets/images/counter/counter1.png";
import statisticImagetwo from "../../assets/images/counter/counter2.png";
import statisticImageThree from "../../assets/images/counter/counter3.png";
import statisticImageFour from "../../assets/images/counter/counter4.png";

const Statistics = () => {
  return (
    <section className="statistics">
      <div className="container">
        <div className="statistics-counter ">
          <div className="col-md-3 col-sm-6">
            <div className="single-ststistics-box">
              <div className="statistics-img">
                <img src={statisticImage} alt="counter-icon" />
              </div>
              <div className="statistics-content">
                <div className="counter">2556</div>
                <h3>days worked</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-ststistics-box">
              <div className="statistics-img">
                <img src={statisticImagetwo} alt="counter-icon" />
              </div>
              <div className="statistics-content">
                <div className="counter">326</div>
                <h3>project finished</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-ststistics-box">
              <div className="statistics-img">
                <img src={statisticImageThree} alt="counter-icon" />
              </div>
              <div className="statistics-content">
                <div className="counter">1526</div>
                <h3>coffee cup</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-ststistics-box">
              <div className="statistics-img">
                <img src={statisticImageFour} alt="counter-icon" />
              </div>
              <div className="statistics-content">
                <div className="counter">856</div>
                <h3>client satisfied</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
