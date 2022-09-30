import React from "react";
import "./Team.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
  const settings = {
    dots: true,
    //arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="team">
      <div className="container">
        <div className="team-details">
          <div className="project-header team-header text-left">
            <h2>Our expert team</h2>
            <p>Pallamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="team-card">
            <div className="container">
              <div className="row">
                <div className="owl-carousel  team-carousel">
                  <Slider {...settings}>
                    <div className="col-sm-3 col-xs-12">
                      <div className="single-team-box team-box-bg-1">
                        <div className="team-box-inner">
                          <h3>tom hanks</h3>
                          <p className="team-meta">Founder & CEO</p>
                          <a href="team.html" className="learn-btn">
                            learn more
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-12">
                      <div className="single-team-box team-box-bg-2">
                        <div className="team-box-inner">
                          <h3>alex browne</h3>
                          <p className="team-meta">
                            Director, Management & Research
                          </p>
                          <a href="team.html" className="learn-btn">
                            learn more
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-12">
                      <div className="single-team-box team-box-bg-3">
                        <div className="team-box-inner">
                          <h3>darren j. stevens</h3>
                          <p className="team-meta">
                            Director, Finance Solution
                          </p>
                          <a href="team.html" className="learn-btn">
                            learn more
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-12">
                      <div className="single-team-box team-box-bg-4">
                        <div className="team-box-inner">
                          <h3>kevin thomson</h3>
                          <p className="team-meta">Head, Legal Advising</p>
                          <a href="team.html" className="learn-btn">
                            learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
