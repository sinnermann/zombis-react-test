import React from "react";
import "./Clients.css";
import client1 from "../../assets/images/client/client1.png";
import client2 from "../../assets/images/client/client2.png";
import client3 from "../../assets/images/client/client3.png";
import client4 from "../../assets/images/client/client4.png";
import client5 from "../../assets/images/client/client5.png";
import Slider from "react-slick";

const Clients = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="clients">
      <div className="container">
        <div className="clients-area">
          <div className="owl-carousel owl-theme" id="client">
            <Slider {...settings}>
              <div className="item">
                <a href="#">
                  <img src={client1} alt="brand-image" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src={client2} alt="brand-image" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src={client3} alt="brand-image" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src={client4} alt="brand-image" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src={client5} alt="brand-image" />
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
