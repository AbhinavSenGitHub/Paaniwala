import React from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../common/Preloader'
import Header from '../common/Header'

const faq = () => {
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
                <img src="assets/images/logonav2PW.png" alt="" title="" />
              </Link>
            </div>
            <div className="menu-outer">
              {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
            </div>
            <div className="contact-info">
              <h4>Contact Info</h4>
              <ul>
                <li>Bhopal</li>
                <li>
                  <Link to="tel:+91 6265806504">+91 6265806504</Link>
                </li>
                <li>
                  <Link to="https://krishnacoderr.000webhostapp.com/">Portfolio</Link>
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
              <h1>Frequently Asked Question</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Frequently Asked Question</li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Page Title */}
        {/* faq-page-section */}
        <section className="faq-page-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                <div className="faq-content">
                  <div className="sec-title">
                    <h2>Need More Info? Get Your Answers…</h2>
                  </div>
                  <ul className="accordion-box">
                    <li className="accordion block active-block">
                      <div className="acc-btn active">
                        <div className="icon-outer">
                          <i className="fal fa-plus" />
                        </div>
                        <h4>What payment methods exist in your company?</h4>
                      </div>
                      <div className="acc-content current">
                        <div className="text">
                          <p>
                            Lorem ipsum dolor sit amet consectur adip icing sed do
                            eiusmod tempor incididunt labore dolore magna aliqua enim
                            ad minim veniam. quis nostrud exercitation amco laboris
                            nisi ut aliquip ex ea commodo consequat Duis aute irure
                            dolor in reprehen derit in voluptate velit esse cillum.
                          </p>
                          <ul className="list clearfix">
                            <li>Air fares</li>
                            <li>4 Nights Hotel Accomodation</li>
                            <li>Entrance Fees</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="fal fa-plus" />
                        </div>
                        <h4>Can I return the product after purchase?</h4>
                      </div>
                      <div className="acc-content">
                        <div className="text">
                          <p>
                            Lorem ipsum dolor sit amet consectur adip icing sed do
                            eiusmod tempor incididunt labore dolore magna aliqua enim
                            ad minim veniam. quis nostrud exercitation amco laboris
                            nisi ut aliquip ex ea commodo consequat Duis aute irure
                            dolor in reprehen derit in voluptate velit esse cillum.
                          </p>
                          <ul className="list clearfix">
                            <li>Air fares</li>
                            <li>4 Nights Hotel Accomodation</li>
                            <li>Entrance Fees</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="fal fa-plus" />
                        </div>
                        <h4>Is it possible to manage details through dashboard?</h4>
                      </div>
                      <div className="acc-content">
                        <div className="text">
                          <p>
                            Lorem ipsum dolor sit amet consectur adip icing sed do
                            eiusmod tempor incididunt labore dolore magna aliqua enim
                            ad minim veniam. quis nostrud exercitation amco laboris
                            nisi ut aliquip ex ea commodo consequat Duis aute irure
                            dolor in reprehen derit in voluptate velit esse cillum.
                          </p>
                          <ul className="list clearfix">
                            <li>Air fares</li>
                            <li>4 Nights Hotel Accomodation</li>
                            <li>Entrance Fees</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="fal fa-plus" />
                        </div>
                        <h4>Where and how can I exchange or refund?</h4>
                      </div>
                      <div className="acc-content">
                        <div className="text">
                          <p>
                            Lorem ipsum dolor sit amet consectur adip icing sed do
                            eiusmod tempor incididunt labore dolore magna aliqua enim
                            ad minim veniam. quis nostrud exercitation amco laboris
                            nisi ut aliquip ex ea commodo consequat Duis aute irure
                            dolor in reprehen derit in voluptate velit esse cillum.
                          </p>
                          <ul className="list clearfix">
                            <li>Air fares</li>
                            <li>4 Nights Hotel Accomodation</li>
                            <li>Entrance Fees</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="fal fa-plus" />
                        </div>
                        <h4>How do I use a promotional code?</h4>
                      </div>
                      <div className="acc-content">
                        <div className="text">
                          <p>
                            Lorem ipsum dolor sit amet consectur adip icing sed do
                            eiusmod tempor incididunt labore dolore magna aliqua enim
                            ad minim veniam. quis nostrud exercitation amco laboris
                            nisi ut aliquip ex ea commodo consequat Duis aute irure
                            dolor in reprehen derit in voluptate velit esse cillum.
                          </p>
                          <ul className="list clearfix">
                            <li>Air fares</li>
                            <li>4 Nights Hotel Accomodation</li>
                            <li>Entrance Fees</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="fal fa-plus" />
                        </div>
                        <h4>What if the prepaid goods are not delivered?</h4>
                      </div>
                      <div className="acc-content">
                        <div className="text">
                          <p>
                            Lorem ipsum dolor sit amet consectur adip icing sed do
                            eiusmod tempor incididunt labore dolore magna aliqua enim
                            ad minim veniam. quis nostrud exercitation amco laboris
                            nisi ut aliquip ex ea commodo consequat Duis aute irure
                            dolor in reprehen derit in voluptate velit esse cillum.
                          </p>
                          <ul className="list clearfix">
                            <li>Air fares</li>
                            <li>4 Nights Hotel Accomodation</li>
                            <li>Entrance Fees</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="fal fa-plus" />
                        </div>
                        <h4>Is it possible to pay by credit card?</h4>
                      </div>
                      <div className="acc-content">
                        <div className="text">
                          <p>
                            Lorem ipsum dolor sit amet consectur adip icing sed do
                            eiusmod tempor incididunt labore dolore magna aliqua enim
                            ad minim veniam. quis nostrud exercitation amco laboris
                            nisi ut aliquip ex ea commodo consequat Duis aute irure
                            dolor in reprehen derit in voluptate velit esse cillum.
                          </p>
                          <ul className="list clearfix">
                            <li>Air fares</li>
                            <li>4 Nights Hotel Accomodation</li>
                            <li>Entrance Fees</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <i className="fal fa-plus" />
                        </div>
                        <h4>
                          What is the best way to contact with the delivery man?
                        </h4>
                      </div>
                      <div className="acc-content">
                        <div className="text">
                          <p>
                            Lorem ipsum dolor sit amet consectur adip icing sed do
                            eiusmod tempor incididunt labore dolore magna aliqua enim
                            ad minim veniam. quis nostrud exercitation amco laboris
                            nisi ut aliquip ex ea commodo consequat Duis aute irure
                            dolor in reprehen derit in voluptate velit esse cillum.
                          </p>
                          <ul className="list clearfix">
                            <li>Air fares</li>
                            <li>4 Nights Hotel Accomodation</li>
                            <li>Entrance Fees</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-column">
                <div className="faq-sidebar">
                  <div className="form-inner">
                    <h3>Ask Your Valuable Question</h3>
                    <form action="faq.html" method="post">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group message-btn">
                        <button type="submit" className="theme-btn btn-one">
                          Submit Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* faq-page-section end */}
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
                          Call Us:
                          <Link to="tel:3336660001">333-666-0001</Link>
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

export default faq
