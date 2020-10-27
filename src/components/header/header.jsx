import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/MailOutline";
import Tel from "@material-ui/icons/Call";
export default function PrimarySearchAppBar() {
  return (
    <header className="header-with-top">
      <div className="top-header-area bg-dark text-white alt-font">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="address text-left">
                <Tel /> (805) 409-7108
              </div>
            </div>
            <div className="col-6">
              <ul className="header-social text-right">
                <li>
                  <a
                    href="https://wa.me/8054097108"
                    className="facebook-text-hvr"
                  >
                    <WhatsAppIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Creativecreditfix01@gmail.com"
                    className="twitter-text-hvr"
                  >
                    <EmailIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-static">
        <div className="container">
          <a href="#home" title="Logo" className="logo scroll">
            <img
              src="https://parkerplanners.com/blog/wp-content/uploads/2015/10/LG-Creative-logo.jpg"
              className="logo-dark default"
              alt="logo"
            />
          </a>

          <button
            className="sidemenu-button d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#ntg"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="sidemenu-toggler"></span>
            <span className="sidemenu-toggler"></span>
            <span className="sidemenu-toggler"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between align-items-center"
            id="ntg"
          >
            <ul className="navbar-nav mx-auto alt-font">
              <li className="nav-item">
                <a className="nav-link scroll active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#services">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#blog">
                  Latest News
                </a>
              </li>
            </ul>
            <a href="#contact" className="btn btn-nav scroll">
              Let's Get In Touch
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
