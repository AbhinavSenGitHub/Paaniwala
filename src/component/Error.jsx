import React from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../common/Preloader'
import Header from '../common/Header'

const Error = () => {
  return (
    <div>
      <div className="boxed_wrapper">
        {/* preloader */}
        {/* <Preloader/> */}
        {/* preloader end */}
        {/* main header */}
        <Header/>
        {/* main-header end */}
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          <div className="close-btn">
            <i className="fas fa-times" />
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <Link to="/">
                <img src="assets/images/logo-2.png" alt="" title="" />
              </Link>
            </div>
            <div className="menu-outer">
              {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
            </div>
            <div className="contact-info">
              <h4>Contact Info</h4>
              <ul>
                <li>Chicago 12, Melborne City, USA</li>
                <li>
                  <Link to="tel:+8801682648101">+88 01682648101</Link>
                </li>
                <li>
                  <Link to="mailto:info@example.com">info@example.com</Link>
                </li>
              </ul>
            </div>
            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <Link to="/">
                    <span className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fab fa-facebook-square" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fab fa-pinterest-p" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fab fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fab fa-youtube" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
        {/* Page Title */}
        <section
          className="page-title centred"
          style={{ backgroundImage: "url(assets/images/background/page-title.jpg)" }}
        >
          <div
            className="shape"
            style={{ backgroundImage: "url(assets/images/shape/banner-shap.png)" }}
          />
          <div className="auto-container">
            <div className="content-box">
              <h1>404</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>404</li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Page Title */}
        {/* error-page-section */}
        <section className="error-page-section centred">
          <div className="auto-container">
            <div className="inner-box">
              <h1>404</h1>
              <h2>
                We're not being able to find the page <br />
                you're looking for
              </h2>
              <Link to="/" className="theme-btn btn-one">
                Back Home
              </Link>
            </div>
          </div>
        </section>
        {/* error-page-section end */}
        {/* main-footer */}
        <footer className="main-footer">
          <div className="pattern-layer">
            <div
              className="pattern-1"
              style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}
            />
            <div
              className="pattern-2"
              style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}
            />
            <div
              className="pattern-3"
              style={{ backgroundImage: "url(assets/images/shape/shape-14.png)" }}
            />
          </div>
          <div className="auto-container">
            <div className="footer-top clearfix">
              <div
                className="line-shape"
                style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}
              />
              <div className="text pull-left">
                <h2>
                  Please <span>Call Us</span> to Take an Extraordinary Service
                </h2>
              </div>
              <div className="support-box pull-right">
                <Link to="tel:7732253523">
                  <i className="fas fa-phone" />
                  (773) 225-3523
                </Link>
              </div>
            </div>
            <div className="widget-section">
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget logo-widget">
                    <figure className="footer-logo">
                      <Link to="/">
                        <img src="assets/images/footer-logo.png" alt="" />
                      </Link>
                    </figure>
                    <div className="text">
                      <p>
                        Nostrud exertation ullamco labor nisi aliquip commodo duis.
                      </p>
                    </div>
                    <div className="schedule-box">
                      <h6>Open Hours:</h6>
                      <ul className="list clearfix">
                        <li>Mon - Sat: 9AM - 6PM.</li>
                        <li>Sunday: Closed</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget contact-widget ml-70">
                    <div className="widget-title">
                      <h4>Address</h4>
                    </div>
                    <div className="widget-content">
                      <ul className="info-list clearfix">
                        <li>
                          <i className="fal fa-map-marker-alt" />
                          Flat 20, Reynolds Neck, FV77 8WS
                        </li>
                        <li>
                          <i className="fal fa-phone" />
                          Call Us: <Link to="tel:3336660001">333-666-0001</Link>
                        </li>
                        <li>
                          <i className="fal fa-envelope-open-text" />
                          <Link to="mailto:info@example.com">info@example.com</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget links-widget ml-70">
                    <div className="widget-title">
                      <h4>Usefull Link</h4>
                    </div>
                    <div className="widget-content">
                      <ul className="links-list clearfix">
                        <li>
                          <Link to="/">About Company</Link>
                        </li>
                        <li>
                          <Link to="/">Services</Link>
                        </li>
                        <li>
                          <Link to="/">How It Works</Link>
                        </li>
                        <li>
                          <Link to="/">Our Blog</Link>
                        </li>
                        <li>
                          <Link to="/">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget subscribe-widget">
                    <div className="widget-title">
                      <h4>Subscribe</h4>
                    </div>
                    <div className="widget-content">
                      <p>
                        Lorem ipsum dolor sit amet, consect adipisicing elit sed do
                        eiusmod.
                      </p>
                      <div className="form-inner">
                        <form action="contact.html" method="post">
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              placeholder="Your Email"
                              required=""
                            />
                            <button type="submit">
                              <i className="far fa-long-arrow-alt-right" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="auto-container">
              <div className="bottom-inner">
                <div className="copyright">
                  <p>
                    <Link to="/">Acuasafe</Link> © 2021 All Right Reserved
                  </p>
                </div>
                <ul className="social-links clearfix">
                  <li>
                    <Link to="/">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
                <ul className="footer-nav clearfix">
                  <li>
                    <Link to="/">Terms of Service</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/* main-footer end */}
        {/*Scroll to top*/}
        <button className="scroll-top scroll-to-target" data-target="html">
          <span className="fal fa-angle-up" />
        </button>
      </div>

    </div>
  )
}

export default Error
