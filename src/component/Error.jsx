import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
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
                  <span data-text-preloader="a" className="letters-loading">
                    a
                  </span>
                  <span data-text-preloader="c" className="letters-loading">
                    c
                  </span>
                  <span data-text-preloader="u" className="letters-loading">
                    u
                  </span>
                  <span data-text-preloader="a" className="letters-loading">
                    a
                  </span>
                  <span data-text-preloader="s" className="letters-loading">
                    s
                  </span>
                  <span data-text-preloader="a" className="letters-loading">
                    a
                  </span>
                  <span data-text-preloader="f" className="letters-loading">
                    f
                  </span>
                  <span data-text-preloader="e" className="letters-loading">
                    e
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
                    <img src="assets/images/logo.png" alt="" />
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
                        <Link to="/">Home</Link>
                        <ul>
                          <li>
                            <Link to="/">Home Page 01</Link>
                          </li>
                          <li>
                            <Link href="index-2.html">Home Page 02</Link>
                          </li>
                          <li>
                            <Link href="index-3.html">Home Page 03</Link>
                          </li>
                          <li>
                            <Link href="index-onepage.html">OnePage Home</Link>
                          </li>
                          <li>
                            <Link href="index-rtl.html">RTL Home</Link>
                          </li>
                          <li className="dropdown">
                            <Link to="/">Header Style</Link>
                            <ul>
                              <li>
                                <Link to="/">Header Style 01</Link>
                              </li>
                              <li>
                                <Link href="index-3.html">Header Style 02</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="current dropdown">
                        <Link to="/">Pages</Link>
                        <ul>
                          <li>
                            <Link href="about.html">About Us</Link>
                          </li>
                          <li>
                            <Link href="team.html">Our Team</Link>
                          </li>
                          <li>
                            <Link href="testimonials.html">Testimonials</Link>
                          </li>
                          <li>
                            <Link href="/faq">Faq's</Link>
                          </li>
                          <li>
                            <Link href="gallery.html">Gallery One</Link>
                          </li>
                          <li>
                            <Link href="gallery-2.html">Gallery Two</Link>
                          </li>
                          <li>
                            <Link href="/error">404</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/">Services</Link>
                        <ul>
                          <li>
                            <Link href="/service">Our Services</Link>
                          </li>
                          <li>
                            <Link href="service-details.html">Project Planning</Link>
                          </li>
                          <li>
                            <Link href="service-details-2.html">Residential Waters</Link>
                          </li>
                          <li>
                            <Link href="service-details-3.html">Commercial Waters</Link>
                          </li>
                          <li>
                            <Link href="service-details-4.html">Filtration Plants</Link>
                          </li>
                          <li>
                            <Link href="service-details-5.html">Water Softening</Link>
                          </li>
                          <li>
                            <Link href="service-details-6.html">Market Research</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/">Shop</Link>
                        <ul>
                          <li>
                            <Link href="shop.html">Shop</Link>
                          </li>
                          <li>
                            <Link href="shop-details.html">Shop Details</Link>
                          </li>
                          <li>
                            <Link href="/cart">Cart</Link>
                          </li>
                          <li>
                            <Link href="/checkout">Checkout</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/">Elements</Link>
                        <div className="megamenu">
                          <div className="row clearfix">
                            <div className="col-xl-6 column">
                              <ul>
                                <li>
                                  <h4>Elements 1</h4>
                                </li>
                                <li>
                                  <Link href="feature-element-1.html">
                                    Feature Block 01
                                  </Link>
                                </li>
                                <li>
                                  <Link href="feature-element-2.html">
                                    Feature Block 02
                                  </Link>
                                </li>
                                <li>
                                  <Link href="about-element-1.html">About Block 01</Link>
                                </li>
                                <li>
                                  <Link href="about-element-2.html">About Block 02</Link>
                                </li>
                                <li>
                                  <Link href="service-element-1.html">
                                    Service Block 01
                                  </Link>
                                </li>
                                <li>
                                  <Link href="service-element-2.html">
                                    Service Block 02
                                  </Link>
                                </li>
                                <li>
                                  <Link href="service-element-3.html">
                                    Service Block 03
                                  </Link>
                                </li>
                                <li>
                                  <Link href="service-element-4.html">
                                    Service Block 04
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-xl-6 column">
                              <ul>
                                <li>
                                  <h4>Elements 2</h4>
                                </li>
                                <li>
                                  <Link href="news-element-1.html">News Block 01</Link>
                                </li>
                                <li>
                                  <Link href="news-element-2.html">News Block 02</Link>
                                </li>
                                <li>
                                  <Link href="team-element-1.html">Team Block 01</Link>
                                </li>
                                <li>
                                  <Link href="team-element-2.html">Team Block 02</Link>
                                </li>
                                <li>
                                  <Link href="cta-element-1.html">Cta Block 01</Link>
                                </li>
                                <li>
                                  <Link href="cta-element-2.html">Cta Block 02</Link>
                                </li>
                                <li>
                                  <Link href="pricing-element.html">Pricing Block</Link>
                                </li>
                                <li>
                                  <Link href="chooseus-element.html">Chooseus Block</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown">
                        <Link to="/">Blog</Link>
                        <ul>
                          <li>
                            <Link href="blog.html">Blog Grid</Link>
                          </li>
                          <li>
                            <Link href="blog-2.html">Blog Standard</Link>
                          </li>
                          <li>
                            <Link href="blog-details.html">Blog Details</Link>
                          </li>
                        </ul>
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
                  <Link href="shop.html">
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
                    <img src="assets/images/logo.png" alt="" />
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
                <li className="cart-box">
                  <Link href="shop.html">
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
                  <Link href="tel:+8801682648101">+88 01682648101</Link>
                </li>
                <li>
                  <Link href="mailto:info@example.com">info@example.com</Link>
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
                <Link href="tel:7732253523">
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
                          Call Us: <Link href="tel:3336660001">333-666-0001</Link>
                        </li>
                        <li>
                          <i className="fal fa-envelope-open-text" />
                          <Link href="mailto:info@example.com">info@example.com</Link>
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
