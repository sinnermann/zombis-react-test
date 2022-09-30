import React from "react";
import "./LatestNews.css";
import blog1 from "../../assets/images/blog/bl1.jpg";
import blog2 from "../../assets/images/blog/bl2.jpg";
import blog3 from "../../assets/images/blog/bl3.jpg";

const LatestNews = () => {
  return (
    <section className="news">
      <div className="container">
        <div className="news-details">
          <div className="section-header text-center">
            <h2>our latest news</h2>
            <p>
              Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="news-card news-card-pb-25">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="single-news-box">
                  <div className="news-box-bg">
                    <img src={blog1} alt="blog image" />
                    <div className="isotope-overlay">
                      <a href="blog_single.html">
                        <span className="lnr lnr-link"></span>
                      </a>
                    </div>
                  </div>
                  <div className="news-box-inner">
                    <h3>
                      <a href="blog_single.html">
                        The Pros and Cons of Starting an Online Consulting
                        Business
                      </a>
                    </h3>
                    <p className="news-meta">
                      Posted By: <span>Mick Steven</span> // On{" "}
                      <span>12th June, 2017</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-news-box">
                  <div className="news-box-bg">
                    <img src={blog2} alt="blog image" />
                    <div className="isotope-overlay">
                      <a href="blog_single.html">
                        <span className="lnr lnr-link"></span>
                      </a>
                    </div>
                  </div>
                  <div className="news-box-inner">
                    <h3>
                      <a href="blog_single.html">
                        8 Secrets for Your successful Business Mentor Won't Tell
                        You
                      </a>
                    </h3>
                    <p className="news-meta">
                      Posted By: <span>Mick Steven</span> // On{" "}
                      <span>12th June, 2017</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-news-box">
                  <div className="news-box-bg">
                    <img src={blog3} alt="blog image" />
                    <div className="isotope-overlay">
                      <a href="blog_single.html">
                        <span className="lnr lnr-link"></span>
                      </a>
                    </div>
                  </div>
                  <div className="news-box-inner">
                    <h3>
                      <a href="blog_single.html">
                        Hire a Branding Consultant With a Similar Aesthetic to
                        Your Own
                      </a>
                    </h3>
                    <p className="news-meta">
                      Posted By: <span>Mick Steven</span> // On{" "}
                      <span>12th June, 2017</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-btn text-center">
              <a href="/blog" className="project-view">
                See more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
