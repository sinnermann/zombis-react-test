import React from "react";
import "./HeaderSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeaderSlides } from "../../helpers/HeaderSlides";

const HeaderSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          //dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="header-slider-area">
      <div
        id="carousel-example-generic"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <Slider {...settings}>
            {HeaderSlides.map((headerSlide) => (
              <div className="item active">
                <div
                  className="single-slide-item slide-1"
                  style={{ backgroundImage: `url(${headerSlide.image})` }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="single-slide-item-content">
                          <h2>
                            {headerSlide.title} <br /> {headerSlide.title2}
                          </h2>
                          <p>{headerSlide.text}</p>
                          <button type="button" className="slide-btn">
                            get started
                          </button>
                          <button type="button" className="slide-btn">
                            explore more
                          </button>
                        </div>
                      </div>
                    </div>
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

export default HeaderSlider;
