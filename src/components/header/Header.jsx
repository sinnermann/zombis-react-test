import React from "react";
import "../../index.css";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="header-left">
          <ul className="pull-left">
            <li>
              <a href="#">
                <i className="fa fa-phone" aria-hidden="true"></i> +992 563 542
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                info@mail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="header-right pull-right">
          <ul>
            <li>
              <a
                href="#"
                data-toggle="modal"
                data-target=".bs-example-modal-sm"
              >
                Register
              </a>
              /
              <a
                href="#"
                data-toggle="modal"
                data-target=".bs-example-modal-lg"
              >
                Log in
              </a>
              <div
                className="modal fade bs-example-modal-sm"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="mySmallModalLabel"
              >
                <div className="modal-dialog modal-sm" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">
                          <i className="fa fa-close"></i>
                        </span>
                      </button>
                      <h4 className="modal-title" id="mySmallModalLabel">
                        Sign In
                      </h4>
                      {/*
                      <form className="sm-frm" style="padding:25px">
                        <label>Name :</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Email"
                        />
                        <label>Passoward :</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Passoward"
                        />
                        <label>
                          <input type="checkbox" name="personality" /> Remenber
                          Me
                        </label>
                        <button
                          type="button"
                          className="btn btn-default pull-right"
                        >
                          Submit
                        </button>
                      </form>
                      */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade bs-example-modal-lg"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">
                          <i className="fa fa-close"></i>
                        </span>
                      </button>
                      <h4 className="modal-title" id="myLargeModalLabel">
                        Register
                      </h4>
                      {/* 
                      <form className="lg-frm" style="padding:25px">
                        <label>Name :</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Name"
                        />
                        <label>Email :</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Email"
                        />
                        <label>Passoward :</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Passoward"
                        />
                        <button
                          type="button"
                          className="btn btn-default pull-right"
                        >
                          Submit
                        </button>
                      </form> */}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="social-icon">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
