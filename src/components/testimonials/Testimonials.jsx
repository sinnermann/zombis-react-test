import React from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimSlider } from "./../../helpers/TestimSlider";

const Testimonials = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    <section className="testemonial">
      <div className="container">
        <div className="section-header text-center">
          <h2>
            <span>what our client say about us</span>
          </h2>
        </div>
        <div className="owl-carousel owl-theme" id="testemonial-carousel">
          <Slider {...settings}>
            {TestimSlider.map((testimonial) => (
              <div className="home1-testm item">
                <div className="home1-testm-single text-center">
                  <div className="home1-testm-img">
                    <img src={testimonial.image} alt="img" />
                  </div>
                  <div className="home1-testm-txt">
                    <span className="icon section-icon">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                    <p>{testimonial.text}</p>
                    <h3>
                      <a href="#">{testimonial.name}</a>
                    </h3>
                    <h4>{testimonial.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
