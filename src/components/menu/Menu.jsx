import React from "react";
import "../../index.css";
import "./Menu.css";
import logo from "../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <section id="menu" style={{ background: "rgba(115, 112, 216, 1)" }}>
      <div className="container">
        <div className="menubar">
          <nav className="navbar navbar-default">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.html">
                <img src={logo} alt="logo" />
              </a>
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>

                <li>
                  <a href="/team">Team</a>
                </li>
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="#">
                    <span className="lnr lnr-cart"></span>
                  </a>
                </li>
                <li className="search">
                  <form action="">
                    <input type="text" name="search" placeholder="Search...." />
                    <a href="#">
                      <span className="lnr lnr-magnifier"></span>
                    </a>
                  </form>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Menu;
