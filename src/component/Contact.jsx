import React from 'react'
import { Link } from 'react-router-dom'

const contact = () => {
  return (
    <div>
      <div className="boxed_wrapper">
        {/* preloader */}
        <div className="loader-wrap">
          <div className="preloader">
            <div className="preloader-close">Preloader Close</div>
            <div id="handle-preloader" className="handle-preloader">
              <div className="animation-preloader">
                <div className="spinner" />
                <div className="txt-loading">
                  <span data-text-preloader="P" className="letters-loading">
                    {" "}
                    P{" "}
                  </span>
                  <span data-text-preloader="a" className="letters-loading">
                    {" "}
                    a{" "}
                  </span>
                  <span data-text-preloader="n" className="letters-loading">
                    {" "}
                    n{" "}
                  </span>
                  <span data-text-preloader="i" className="letters-loading">
                    {" "}
                    i{" "}
                  </span>
                  <span data-text-preloader="W" className="letters-loading">
                    {" "}
                    W{" "}
                  </span>
                  <span data-text-preloader="a" className="letters-loading">
                    {" "}
                    a{" "}
                  </span>
                  <span data-text-preloader="l" className="letters-loading">
                    {" "}
                    l{" "}
                  </span>
                  <span data-text-preloader="a" className="letters-loading">
                    {" "}
                    a{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* preloader end */}
        {/* main header */}
        <header className="main-header">
          {/* header-lower */}
          <div className="header-lower">
            <div
              className="shape"
              style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}
            />
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link to="/">
                    <img src="assets/images/logonav2PW.png" alt="" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area clearfix">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li className="dropdown">
                        <Link to="/">Shop</Link>
                        <ul>
                          <li>
                            <Link href="/cart">Cart</Link>
                          </li>
                          <li>
                            <Link href="/checkout">Checkout</Link>
                          </li>
                          <li>
                            <Link href="/faq">Faq's</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/service">Services</Link>
                      </li>
                      <li>
                        <Link href="blog.html">Blog</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <ul className="nav-right">
                <li className="search-box-outer">
                  <div className="dropdown">
                    <button
                      className="search-box-btn"
                      type="button"
                      id="dropdownMenu3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="far fa-search" />
                    </button>
                    <div
                      className="dropdown-menu search-panel"
                      aria-labelledby="dropdownMenu3"
                    >
                      <div className="form-container">
                        <form method="post" action="blog.html">
                          <div className="form-group">
                            <input
                              type="search"
                              name="search-field"
                              defaultValue=""
                              placeholder="Search...."
                              required=""
                            />
                            <button type="submit" className="search-btn">
                              <span className="fas fa-search" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cart-box">
                  <Link href="/cart">
                    <i className="fal fa-shopping-cart" />
                    <span>3</span>
                  </Link>
                </li>
                <li className="btn-box">
                  <Link to="/" className="theme-btn btn-one">
                    Request A Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/*sticky Header*/}
          <div className="sticky-header">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link to="/">
                    <img src="assets/images/logonav2PW.png" alt="" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area clearfix">
                <nav className="main-menu clearfix">
                  {/*Keep This Empty / Menu will come through Javascript*/}
                </nav>
              </div>
              <ul className="nav-right">
                <li className="search-box-outer">
                  <div className="dropdown">
                    <button
                      className="search-box-btn"
                      type="button"
                      id="dropdownMenu4"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="far fa-search" />
                    </button>
                    <div
                      className="dropdown-menu search-panel"
                      aria-labelledby="dropdownMenu4"
                    >
                      <div className="form-container">
                        <form method="post" action="blog.html">
                          <div className="form-group">
                            <input
                              type="search"
                              name="search-field"
                              defaultValue=""
                              placeholder="Search...."
                              required=""
                            />
                            <button type="submit" className="search-btn">
                              <span className="fas fa-search" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="btn-box">
                  <Link to="/" className="theme-btn btn-one">
                    Request A Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
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
                  <Link href="tel:+91 6265806504">+91 6265806504</Link>
                </li>
                <li>
                  <Link href="https://krishnacoderr.000webhostapp.com/">Portfolio</Link>
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
              <h1>Contact Us</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Page Title */}
        {/* contact-style-two */}
        <section className="contact-style-two">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-5 col-md-12 col-sm-12 info-column">
                <div className="info-inner">
                  <div
                    className="shape"
                    style={{
                      backgroundImage: "url(assets/images/shape/shape-42.png)"
                    }}
                  />
                  <h3>Contact Information</h3>
                  <ul className="info-list clearfix">
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      <h5>Office Location</h5>
                      <p>
                        Bhopal Rajeev Nagar
                        <br />
                        Code:462001,MP
                      </p>
                    </li>
                    <li>
                      <i className="fas fa-envelope-open" />
                      <h5>Email Drop Us</h5>
                      <p>
                        <Link href="mailto:info@example.com">paniwala111@gmail.com</Link>
                        <br />
                        <Link href="mailto:information@gmail.com">
                          paniwala111@gmail.com
                        </Link>
                      </p>
                    </li>
                    <li>
                      <i className="fas fa-phone" />
                      <h5>Call for Help</h5>
                      <p>
                        <Link href="tel:11165458856">+(91) </Link>
                        <br />
                        6265806504<Link href="tel:11165458857">+(91)6265806504</Link>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 form-column">
                <div className="form-inner">
                  <h3>Leave a Comment</h3>
                  <form
                    method="post"
                    action="sendemail.php"
                    id="contact-form"
                    className="default-form"
                  >
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                        <input
                          type="text"
                          name="phone"
                          required=""
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                        <input
                          type="text"
                          name="subject"
                          required=""
                          placeholder="Subject"
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          name="message"
                          placeholder="Leave A Comment"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                        <button
                          className="theme-btn btn-one"
                          type="submit"
                          name="submit-form"
                        >
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-style-two end */}
        {/* google-map-section */}
        <section className="google-map-section">
          <div className="auto-container">
            <div className="map-inner">
              <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.3170407070706!2d77.15771687151752!3d28.739949725304516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01bb0d3ad761%3A0x379c2ffc1b6717b!2sTiyagi%20Building%20Supplier!5e0!3m2!1sen!2sin!4v1703220356880!5m2!1sen!2sin"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              {/* <div
        class="google-map"
        id="contact-google-map"
        data-map-lat="40.712776"
        data-map-lng="-74.005974"
        data-icon-path="assets/images/icons/map-marker.png"
        data-map-title="Brooklyn, New York, United Kingdom"
        data-map-zoom="12"
        data-markers='{
                      "marker-1": [40.712776, -74.005974, "<h4>Branch Office</h4><p>77/99 New York</p>","assets/images/icons/map-marker.png"]
                  }'
      ></div>
      */}
            </div>
          </div>
        </section>
        {/* google-map-section */}
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
                <Link href="tel:7732253523">
                  <i className="fas fa-phone" />
                  +916265806504
                </Link>
              </div>
            </div>
            <div className="widget-section">
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget logo-widget">
                    <figure className="footer-logo">
                      <Link to="/">
                        <img src="assets/images/logo.png" alt="" />
                      </Link>
                    </figure>
                    <div className="text">
                      <p>
                        Pani Wala superfast delivery for Water delivered fresh &amp;
                        on time.
                      </p>
                    </div>
                    <div className="schedule-box">
                      <h6>Open Hours:</h6>
                      <ul className="list clearfix">
                        <li>Sun - Sat: 8AM - 10PM.</li>
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
                          Bhopal,Pin Code:462001,MP
                        </li>
                        <li>
                          <i className="fal fa-phone" />
                          Call Us:
                          <Link href="tel:3336660001">+916265806504</Link>
                        </li>
                        <li>
                          <i className="fal fa-envelope-open-text" />
                          <Link href="mailto:info@example.com">paniwala111@gmail.com</Link>
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
                    <Link to="/"> PaniWala</Link> © 2023 All Right Reserved
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

export default contact
