import React from 'react'
import { Link } from 'react-router-dom'

const Service = () => {
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
              <h1>Our Services</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Our Services</li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Page Title */}
        {/* service-page-section */}
        <section className="service-page-section centred">
          <div className="auto-container">
            <div className="sec-title">
              <h2>
                Protect Your Family with Best Water <br />
                Filtering System Services
              </h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-two wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <i className="flaticon-water-bottle-1" />
                      </div>
                    </div>
                    <h4>
                      <Link href="service-details-2.html">Residential Waters</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor amet adilit sed eiusm tempor encid dolore.
                    </p>
                    <div className="btn-box">
                      <Link href="service-details-2.html" className="theme-btn btn-two">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-two wow fadeInUp animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <i className="flaticon-water-bottle" />
                      </div>
                    </div>
                    <h4>
                      <Link href="service-details-3.html">Commercial Waters</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor amet adilit sed eiusm tempor encid dolore.
                    </p>
                    <div className="btn-box">
                      <Link href="service-details-3.html" className="theme-btn btn-two">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-two wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <i className="flaticon-water" />
                      </div>
                    </div>
                    <h4>
                      <Link href="service-details-4.html">Filtration Plants</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor amet adilit sed eiusm tempor encid dolore.
                    </p>
                    <div className="btn-box">
                      <Link href="service-details-4.html" className="theme-btn btn-two">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-two wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <i className="flaticon-water-drop-1" />
                      </div>
                    </div>
                    <h4>
                      <Link href="service-details-5.html">Water Softening</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor amet adilit sed eiusm tempor encid dolore.
                    </p>
                    <div className="btn-box">
                      <Link href="service-details-5.html" className="theme-btn btn-two">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-two wow fadeInUp animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <i className="flaticon-recycle" />
                      </div>
                    </div>
                    <h4>
                      <Link href="service-details-6.html">Market Research</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor amet adilit sed eiusm tempor encid dolore.
                    </p>
                    <div className="btn-box">
                      <Link href="service-details-6.html" className="theme-btn btn-two">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-two wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon">
                        <i className="flaticon-water-drop" />
                      </div>
                    </div>
                    <h4>
                      <Link href="service-details.html">Project Planning</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor amet adilit sed eiusm tempor encid dolore.
                    </p>
                    <div className="btn-box">
                      <Link href="service-details.html" className="theme-btn btn-two">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service-page-section end */}
        {/* testimonial-section */}
        <section className="testimonial-section alternat-2 bg-color-1">
          <div className="shape-layer">
            <div
              className="shape-1"
              style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}
            />
            <div
              className="shape-2"
              style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}
            />
          </div>
          <div className="auto-container">
            <div className="sec-title centred">
              <h2>
                What Our Client are Saying <br />
                About Acuasafe
              </h2>
            </div>
            <div className="two-column-carousel owl-carousel owl-theme owl-nav-none">
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <figure className="author-thumb">
                    <img src="assets/images/resource/testimonial-1.jpg" alt="" />
                  </figure>
                  <div className="inner">
                    <ul className="rating clearfix">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor amet consectur adicing elit sed do usmod
                      tempor incididunt enim ad minim veniam.
                    </p>
                    <h5>Nicolas Lawson</h5>
                    <span className="designation">Designer</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <figure className="author-thumb">
                    <img src="assets/images/resource/testimonial-2.jpg" alt="" />
                  </figure>
                  <div className="inner">
                    <ul className="rating clearfix">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor amet consectur adicing elit sed do usmod
                      tempor incididunt enim ad minim veniam.
                    </p>
                    <h5>Michael Bean</h5>
                    <span className="designation">Manager</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <figure className="author-thumb">
                    <img src="assets/images/resource/testimonial-1.jpg" alt="" />
                  </figure>
                  <div className="inner">
                    <ul className="rating clearfix">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor amet consectur adicing elit sed do usmod
                      tempor incididunt enim ad minim veniam.
                    </p>
                    <h5>Nicolas Lawson</h5>
                    <span className="designation">Designer</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <figure className="author-thumb">
                    <img src="assets/images/resource/testimonial-2.jpg" alt="" />
                  </figure>
                  <div className="inner">
                    <ul className="rating clearfix">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor amet consectur adicing elit sed do usmod
                      tempor incididunt enim ad minim veniam.
                    </p>
                    <h5>Michael Bean</h5>
                    <span className="designation">Manager</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <figure className="author-thumb">
                    <img src="assets/images/resource/testimonial-1.jpg" alt="" />
                  </figure>
                  <div className="inner">
                    <ul className="rating clearfix">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor amet consectur adicing elit sed do usmod
                      tempor incididunt enim ad minim veniam.
                    </p>
                    <h5>Nicolas Lawson</h5>
                    <span className="designation">Designer</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-block-one">
                <div className="inner-box">
                  <figure className="author-thumb">
                    <img src="assets/images/resource/testimonial-2.jpg" alt="" />
                  </figure>
                  <div className="inner">
                    <ul className="rating clearfix">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor amet consectur adicing elit sed do usmod
                      tempor incididunt enim ad minim veniam.
                    </p>
                    <h5>Michael Bean</h5>
                    <span className="designation">Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial-section end */}
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

export default Service
