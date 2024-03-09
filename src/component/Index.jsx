import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
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
        {/* banner-section */}
        <section className="banner-section">
          <div
            className="shape"
            style={{ backgroundImage: "url(assets/images/shape/banner-shap.png)" }}
          />
          <div className="banner-carousel owl-theme owl-carousel owl-nav-none owl-dots-none">
            <div className="slide-item">
              <div className="pattern-box">
                <div className="pattern-1" />
                <div className="pattern-2" />
                <div
                  className="pattern-3"
                  style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}
                />
              </div>
              <div className="auto-container">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image image-1">
                      <img src="assets/images/banner/vector-1.png" alt="" />
                    </figure>
                    <figure className="image image-2">
                      <img src="assets/images/banner/vector-2.png" alt="" />
                    </figure>
                  </div>
                  <div className="content-box">
                    <h2>Always Want Safe and Good Water for Healthy Life</h2>
                    <p>
                      Excepteur sint occaecat cupidatat non proident sunt culpa qui
                      officia deserunt mollit.
                    </p>
                    <div className="btn-box clearfix">
                      <Link href="/service" className="theme-btn btn-one">
                        Our Services
                      </Link>
                      <Link href="/service" className="theme-btn banner-btn">
                        Discover
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="pattern-box">
                <div className="pattern-1" />
                <div className="pattern-2" />
                <div
                  className="pattern-3"
                  style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}
                />
              </div>
              <div className="auto-container">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image image-1">
                      <img src="assets/images/banner/vector-1.png" alt="" />
                    </figure>
                    <figure className="image image-2">
                      <img src="assets/images/banner/vector-2.png" alt="" />
                    </figure>
                  </div>
                  <div className="content-box">
                    <h2>Always Want Safe and Good Water for Healthy Life</h2>
                    <p>
                      Excepteur sint occaecat cupidatat non proident sunt culpa qui
                      officia deserunt mollit.
                    </p>
                    <div className="btn-box clearfix">
                      <Link href="/service" className="theme-btn btn-one">
                        Our Services
                      </Link>
                      <Link href="/service" className="theme-btn banner-btn">
                        Discover
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-item">
              <div className="pattern-box">
                <div className="pattern-1" />
                <div className="pattern-2" />
                <div
                  className="pattern-3"
                  style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}
                />
              </div>
              <div className="auto-container">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image image-1">
                      <img src="assets/images/banner/vector-1.png" alt="" />
                    </figure>
                    <figure className="image image-2">
                      <img src="assets/images/banner/vector-2.png" alt="" />
                    </figure>
                  </div>
                  <div className="content-box">
                    <h2>Always Want Safe and Good Water for Healthy Life</h2>
                    <p>
                      Excepteur sint occaecat cupidatat non proident sunt culpa qui
                      officia deserunt mollit.
                    </p>
                    <div className="btn-box clearfix">
                      <Link href="/service" className="theme-btn btn-one">
                        Our Services
                      </Link>
                      <Link href="/service" className="theme-btn banner-btn">
                        Discover
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner-section end */}
        {/* feature-section */}
        <section className="feature-section centred">
          <div className="auto-container">
            <div
              className="inner-container wow fadeInLeft animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="title-text">
                <h2>
                  A Trusted Name In <br />
                  Bottled Water Industry
                </h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                  <div className="feature-block-one">
                    <div className="inner-box">
                      <div
                        className="shape"
                        style={{
                          backgroundImage: "url(assets/images/shape/shape-3.png)"
                        }}
                      />
                      <div className="icon-box">
                        <i className="flaticon-water-drop" />
                      </div>
                      <h4>Maxium Purity</h4>
                      <p>Lorem ipsum dolor sit amet adipelit sed eiusmte.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                  <div className="feature-block-one">
                    <div className="inner-box">
                      <div
                        className="shape"
                        style={{
                          backgroundImage: "url(assets/images/shape/shape-3.png)"
                        }}
                      />
                      <div className="icon-box">
                        <i className="flaticon-water-drop-1" />
                      </div>
                      <h4>Cholorine Free</h4>
                      <p>Lorem ipsum dolor sit amet adipelit sed eiusmte.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                  <div className="feature-block-one">
                    <div className="inner-box">
                      <div
                        className="shape"
                        style={{
                          backgroundImage: "url(assets/images/shape/shape-3.png)"
                        }}
                      />
                      <div className="icon-box">
                        <i className="flaticon-recycle" />
                      </div>
                      <h4>5 Steps Filtration</h4>
                      <p>Lorem ipsum dolor sit amet adipelit sed eiusmte.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                  <div className="feature-block-one">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-glass" />
                      </div>
                      <h4>Healthy Water</h4>
                      <p>Lorem ipsum dolor sit amet adipelit sed eiusmte.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* feature-section end */}
        {/* about-section */}
        <section className="about-section">
          <div className="auto-container">
            <div className="row align-items-center clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <figure
                  className="image-box clearfix wow fadeInLeft animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <img src="assets/images/resource/about-1.png" alt="" />
                </figure>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_1">
                  <div
                    className="content-box wow fadeInRight animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="sec-title">
                      <h2>We Always Want Safe and Healthy Water for Healthy Life.</h2>
                    </div>
                    <div className="text">
                      <p>
                        We always strive for safe and healthy water, recognizing its
                        vital role in sustaining life's health and well-being. Access
                        to clean water is fundamental for ensuring a healthy existence
                        and promoting overall wellness within communities and
                        ecosystems alike.
                      </p>
                      <p>
                        Ensure your family's safety and well-being by investing in one
                        of the most reliable water filtering systems available.
                        Protect their health with top-quality filtration technology
                        for clean and pure drinking water.
                      </p>
                    </div>
                    <div className="btn-box">
                      <Link href="about.html" className="theme-btn btn-one">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-section end */}
        {/* service-section */}
        <section className="service-section bg-color-1">
          <div
            className="shape"
            style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}
          />
          <figure className="image-layer">
            <img src="assets/images/resource/service-1.png" alt="" />
          </figure>
          <div className="bg-shape">
            <div className="bg-shape-1" />
            <div className="bg-shape-2" />
            <div className="bg-shape-3" />
          </div>
          <div className="auto-container">
            <div className="sec-title centred">
              <h2>
                Protect Your Family with Best Water <br />
                Filtering System Services
              </h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 big-column">
                <div className="left-column text-right">
                  <div
                    className="service-block-one wow fadeInLeft animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-water-bottle-1" />
                      </div>
                      <h4>
                        <Link href="service-details-2.html">Residential Waters</Link>
                      </h4>
                      <p>Lorem ipsum dolor sit amet adilit sed eiusmte mpor.</p>
                    </div>
                  </div>
                  <div
                    className="service-block-one wow fadeInLeft animated"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-water" />
                      </div>
                      <h4>
                        <Link href="service-details-4.html">Filtration Plants</Link>
                      </h4>
                      <p>Lorem ipsum dolor sit amet adilit sed eiusmte mpor.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 big-column">
                <div className="right-column text-left">
                  <div
                    className="service-block-one wow fadeInRight animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-water-bottle" />
                      </div>
                      <h4>
                        <Link href="service-details-3.html">Commercial Waters</Link>
                      </h4>
                      <p>Lorem ipsum dolor sit amet adilit sed eiusmte mpor.</p>
                    </div>
                  </div>
                  <div
                    className="service-block-one wow fadeInRight animated"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="flaticon-water-drop-1" />
                      </div>
                      <h4>
                        <Link href="service-details-5.html">Water Softening</Link>
                      </h4>
                      <p>Lorem ipsum dolor sit amet adilit sed eiusmte mpor.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service-section end */}
        {/* shop-section */}
        <section className="shop-section centred">
          <div className="auto-container">
            <div className="sec-title">
              <h2>
                We Deliver Best Quality <br />
                Bottle Packs.
              </h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                <div
                  className="shop-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500m"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/resource/shop/shop-10.jpg" alt="" />
                    </figure>
                    <div className="lower-content">
                      <div
                        className="shape"
                        style={{
                          backgroundImage: "url(assets/images/shape/shape-7.png)"
                        }}
                      />
                      <span>20L Bottle</span>
                      <h4>
                        <Link href="shop-details.html">Normal Water Bottle</Link>
                      </h4>
                      <h6>₹30.00</h6>
                      <p>
                        Lorem ipsum dolor sit amet adipelit sed eiusmte.mpor encid
                        dolore.
                      </p>
                      <div className="btn-box">
                        <Link href="shop-details.html" className="theme-btn btn-two">
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                <div
                  className="shop-block-one wow fadeInUp animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500m"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="assets/images/resource/shop/water-chiller-jar.jpg"
                        alt=""
                      />
                    </figure>
                    <div className="lower-content">
                      <div
                        className="shape"
                        style={{
                          backgroundImage: "url(assets/images/shape/shape-7.png)"
                        }}
                      />
                      <span>20L Bottle</span>
                      <h4>
                        <Link href="shop-details.html">Chilled Water Bottle</Link>
                      </h4>
                      <h6>₹35.00</h6>
                      <p>
                        Lorem ipsum dolor sit amet adipelit sed eiusmte.mpor encid
                        dolore.
                      </p>
                      <div className="btn-box">
                        <Link href="shop-details.html" className="theme-btn btn-two">
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                <div
                  className="shop-block-one wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500m"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/resource/shop/shop-3.jpg" alt="" />
                    </figure>
                    <div className="lower-content">
                      <div
                        className="shape"
                        style={{
                          backgroundImage: "url(assets/images/shape/shape-7.png)"
                        }}
                      />
                      <span>20L Bottle</span>
                      <h4>
                        <Link href="shop-details.html">Mineral Water Bottle</Link>
                      </h4>
                      <h6>₹110.00</h6>
                      <p>
                        Lorem ipsum dolor sit amet adipelit sed eiusmte.mpor encid
                        dolore.
                      </p>
                      <div className="btn-box">
                        <Link href="shop-details.html" className="theme-btn btn-two">
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* shop-section end */}
        {/* testimonial-section */}
        <section className="testimonial-section bg-color-1">
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
            <div className="sec-title">
              <h2>
                What Our Client are Saying <br />
                About PaniWala
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
                    <img src="assets/images/resource/tyagi-ji-img.jpg" alt="" />
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
                      MP ,Bhopal,Rajeev Nagar ,Pin Code:462001(Bhopal best water
                      supplier with on time delivery in 30 minutes).
                    </p>
                    <h5>Tyagi ji </h5>
                    <span className="designation">Founder CEO</span>
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
                    <img src="assets/images/resource/tyagi-ji-img.jpg" alt="" />
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
                      MP ,Bhopal,Rajeev Nagar ,Pin Code:462001(Bhopal best water
                      supplier with on time delivery in 30 minutes).
                    </p>
                    <h5>Tyagi ji </h5>
                    <span className="designation">Founder CEO</span>
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
                    <img src="assets/images/resource/tyagi-ji-img.jpg" alt="" />
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
                      MP ,Bhopal,Rajeev Nagar ,Pin Code:462001(Bhopal best water
                      supplier with on time delivery in 30 minutes).
                    </p>
                    <h5>Tyagi ji </h5>
                    <span className="designation">Founder CEO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial-section end */}
        {/* team-section */}
        {/*
<section class="team-section">
  <div class="auto-container">
    <div class="sec-title centred">
      <h2>What is Really seo & How <br />Can I Use It?</h2>
    </div>
    <div class="row clearfix">
      <div class="col-lg-4 col-md-6 col-sm-12 team-block">
        <div
          class="team-block-one wow fadeInUp animated"
          data-wow-delay="00ms"
          data-wow-duration="1500m"
        >
          <div class="inner-box">
            <div class="image-box">
              <figure class="image">
                <img src="assets/images/team/team-1.jpg" alt="" />
              </figure>
              <ul class="social-links clearfix">
                <li>
                  <Link to="/"
                    ><i class="fab fa-facebook-f"></i
                  ></Link>
                </li>
                <li>
                  <Link to="/"><i class="fab fa-twitter"></i></Link>
                </li>
                <li>
                  <Link to="/"
                    ><i class="fab fa-google-plus-g"></i
                  ></Link>
                </li>
              </ul>
            </div>
            <div class="lower-content">
              <h4><Link to="/">Christian Bale</Link></h4>
              <span class="designation">CEO & Founder</span>
              <div class="share-box">
                <Link to="/"><i class="fas fa-share-alt"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 team-block">
        <div
          class="team-block-one wow fadeInUp animated"
          data-wow-delay="300ms"
          data-wow-duration="1500m"
        >
          <div class="inner-box">
            <div class="image-box">
              <figure class="image">
                <img src="assets/images/team/team-2.jpg" alt="" />
              </figure>
              <ul class="social-links clearfix">
                <li>
                  <Link to="/"
                    ><i class="fab fa-facebook-f"></i
                  ></Link>
                </li>
                <li>
                  <Link to="/"><i class="fab fa-twitter"></i></Link>
                </li>
                <li>
                  <Link to="/"
                    ><i class="fab fa-google-plus-g"></i
                  ></Link>
                </li>
              </ul>
            </div>
            <div class="lower-content">
              <h4><Link to="/">Hard Branots</Link></h4>
              <span class="designation">Designer</span>
              <div class="share-box">
                <Link to="/"><i class="fas fa-share-alt"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 team-block">
        <div
          class="team-block-one wow fadeInUp animated"
          data-wow-delay="600ms"
          data-wow-duration="1500m"
        >
          <div class="inner-box">
            <div class="image-box">
              <figure class="image">
                <img src="assets/images/team/team-3.jpg" alt="" />
              </figure>
              <ul class="social-links clearfix">
                <li>
                  <Link to="/"
                    ><i class="fab fa-facebook-f"></i
                  ></Link>
                </li>
                <li>
                  <Link to="/"><i class="fab fa-twitter"></i></Link>
                </li>
                <li>
                  <Link to="/"
                    ><i class="fab fa-google-plus-g"></i
                  ></Link>
                </li>
              </ul>
            </div>
            <div class="lower-content">
              <h4><Link to="/">Monica Bana</Link></h4>
              <span class="designation">Manager</span>
              <div class="share-box">
                <Link to="/"><i class="fas fa-share-alt"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
*/}
        {/* team-section end */}
        {/* cta-section */}
        {/*
<section class="cta-section bg-color-2">
  <div class="pattern-layer">
    <div
      class="pattern-1"
      style="background-image: url(assets/images/shape/shape-10.png)"
    ></div>
    <div
      class="pattern-2"
      style="background-image: url(assets/images/shape/shape-2.png)"
    ></div>
    <div
      class="pattern-3"
      style="background-image: url(assets/images/shape/shape-33.png)"
    ></div>
    <div
      class="pattern-4"
      style="background-image: url(assets/images/shape/shape-34.png)"
    ></div>
  </div>
  <div class="auto-container">
    <div class="row align-items-center clearfix">
      <div class="col-lg-6 col-md-12 col-sm-12 image-column">
        <figure
          class="image-box wow slideInLeft animated"
          data-wow-delay="00ms"
          data-wow-duration="1500m clearfix"
        >
          <img src="assets/images/resource/cta-1.png" alt="" />
        </figure>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 content-column">
        <div class="content_block_3">
          <div class="content-box">
            <div class="sec-title light">
              <h2>Ready To Get Our Premium Water Delivery Service.</h2>
            </div>
            <div class="text">
              <p>
                We give our services to more than 10 countries. We give
                our delivery service using more than 50 couriers within
                2hr in anywhere in the city.
              </p>
            </div>
            <ul class="list clearfix">
              <li>Free Delivery</li>
              <li>7 Days In A Week Service</li>
            </ul>
            <div class="btn-box">
              <Link href="/service" class="theme-btn btn-one"
                >Our Services</Link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  */}
        {/* cta-section end */}
        {/* news-section */}
        <section className="news-section">
          <div className="auto-container">
            <div className="sec-title centred">
              <h2>
                Stay Update with <br />
                PaniWala
              </h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500m"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="blog-details.html">
                        <img src="assets/images/news/news-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      <div className="category">
                        <Link href="blog-details.html">Consulting</Link>
                      </div>
                      <h4>
                        <Link href="blog-details.html">
                          Latest news first tie-up of paniwala with tyagi ji.
                        </Link>
                      </h4>
                      <ul className="post-info clearfix">
                        <li>
                          <Link href="blog-details.html">tyagi ji</Link>
                        </li>
                        <li>Dec 22, 2023</li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consecte adipisicing elit sed do
                          eiusmod tempor incididunt labore aliqua.
                        </p>
                      </div>
                      <div className="btn-box">
                        <Link href="blog-details.html" className="theme-btn btn-two">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="300ms"
                  data-wow-duration="1500m"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="blog-details.html">
                        <img src="assets/images/news/news-2.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      <div className="category">
                        <Link href="blog-details.html">Consulting</Link>
                      </div>
                      <h4>
                        <Link href="blog-details.html">
                          Taking The Pattern Library To The Next Level
                        </Link>
                      </h4>
                      <ul className="post-info clearfix">
                        <li>
                          <Link href="blog-details.html">Monica Bana</Link>
                        </li>
                        <li>Aug 07, 2021</li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consecte adipisicing elit sed do
                          eiusmod tempor incididunt labore aliqua.
                        </p>
                      </div>
                      <div className="btn-box">
                        <Link href="blog-details.html" className="theme-btn btn-two">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500m"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="blog-details.html">
                        <img src="assets/images/news/news-3.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      <div className="category">
                        <Link href="blog-details.html">Consulting</Link>
                      </div>
                      <h4>
                        <Link href="blog-details.html">How New Font Improve The Web</Link>
                      </h4>
                      <ul className="post-info clearfix">
                        <li>
                          <Link href="blog-details.html">Hard Branots</Link>
                        </li>
                        <li>Aug 07, 2021</li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consecte adipisicing elit sed do
                          eiusmod tempor incididunt labore aliqua.
                        </p>
                      </div>
                      <div className="btn-box">
                        <Link href="blog-details.html" className="theme-btn btn-two">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* news-section end */}
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

export default Index
