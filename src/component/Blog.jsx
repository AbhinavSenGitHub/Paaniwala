import React from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../common/Preloader'
import Header from '../common/Header'
const Blog = () => {
    return (
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
        <h1>Blog Grid</h1>
        <ul className="bread-crumb clearfix">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Blog Grid</li>
        </ul>
      </div>
    </div>
  </section>
  {/* End Page Title */}
  {/* sidebar-page-container */}
  <section className="sidebar-page-container blog-grid">
    <div className="auto-container">
      <div className="row clearfix">
        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
          <div className="blog-grid-content">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12 news-block">
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
                          Consecter Elit Dui Eiusmod Didunt Labore Dolor.
                        </Link>
                      </h4>
                      <ul className="post-info clearfix">
                        <li>
                          <Link href="blog-details.html">Nelly Farel</Link>
                        </li>
                        <li>Aug 07, 2021</li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consecte adipisicing elit
                          sed do eiusmod tempor incididunt labore aliqua.
                        </p>
                      </div>
                      <div className="btn-box">
                        <Link
                          href="blog-details.html"
                          className="theme-btn btn-two"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
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
                          Including Animation In Your Design System
                        </Link>
                      </h4>
                      <ul className="post-info clearfix">
                        <li>
                          <Link href="blog-details.html">Eva Green</Link>
                        </li>
                        <li>Aug 07, 2021</li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consecte adipisicing elit
                          sed do eiusmod tempor incididunt labore aliqua.
                        </p>
                      </div>
                      <div className="btn-box">
                        <Link
                          href="blog-details.html"
                          className="theme-btn btn-two"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
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
                        <Link href="blog-details.html">
                          Taking The Pattern Library To The Next Level
                        </Link>
                      </h4>
                      <ul className="post-info clearfix">
                        <li>
                          <Link href="blog-details.html">George Clooney</Link>
                        </li>
                        <li>Aug 07, 2021</li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consecte adipisicing elit
                          sed do eiusmod tempor incididunt labore aliqua.
                        </p>
                      </div>
                      <div className="btn-box">
                        <Link
                          href="blog-details.html"
                          className="theme-btn btn-two"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500m"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="blog-details.html">
                        <img src="assets/images/news/news-4.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      <div className="category">
                        <Link href="blog-details.html">Consulting</Link>
                      </div>
                      <h4>
                        <Link href="blog-details.html">
                          How New Font Improve The Web
                        </Link>
                      </h4>
                      <ul className="post-info clearfix">
                        <li>
                          <Link href="blog-details.html">Simon Baker</Link>
                        </li>
                        <li>Aug 07, 2021</li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consecte adipisicing elit
                          sed do eiusmod tempor incididunt labore aliqua.
                        </p>
                      </div>
                      <div className="btn-box">
                        <Link
                          href="blog-details.html"
                          className="theme-btn btn-two"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500m"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="blog-details.html">
                        <img src="assets/images/news/news-5.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      <div className="category">
                        <Link href="blog-details.html">Consulting</Link>
                      </div>
                      <h4>
                        <Link href="blog-details.html">
                          The Most Inspiring Interior Design For Your Home.
                        </Link>
                      </h4>
                      <ul className="post-info clearfix">
                        <li>
                          <Link href="blog-details.html">Nelly Farel</Link>
                        </li>
                        <li>Aug 07, 2021</li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consecte adipisicing elit
                          sed do eiusmod tempor incididunt labore aliqua.
                        </p>
                      </div>
                      <div className="btn-box">
                        <Link
                          href="blog-details.html"
                          className="theme-btn btn-two"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500m"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="blog-details.html">
                        <img src="assets/images/news/news-6.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      <div className="category">
                        <Link href="blog-details.html">Consulting</Link>
                      </div>
                      <h4>
                        <Link href="blog-details.html">
                          Secrets To Totally Rocking Your Real Estate.
                        </Link>
                      </h4>
                      <ul className="post-info clearfix">
                        <li>
                          <Link href="blog-details.html">George Clooney</Link>
                        </li>
                        <li>Aug 07, 2021</li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consecte adipisicing elit
                          sed do eiusmod tempor incididunt labore aliqua.
                        </p>
                      </div>
                      <div className="btn-box">
                        <Link
                          href="blog-details.html"
                          className="theme-btn btn-two"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500m"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="blog-details.html">
                        <img src="assets/images/news/news-7.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      <div className="category">
                        <Link href="blog-details.html">Consulting</Link>
                      </div>
                      <h4>
                        <Link href="blog-details.html">
                          This Week I Thought It Would Be Good.
                        </Link>
                      </h4>
                      <ul className="post-info clearfix">
                        <li>
                          <Link href="blog-details.html">Simon Baker</Link>
                        </li>
                        <li>Aug 07, 2021</li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consecte adipisicing elit
                          sed do eiusmod tempor incididunt labore aliqua.
                        </p>
                      </div>
                      <div className="btn-box">
                        <Link
                          href="blog-details.html"
                          className="theme-btn btn-two"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500m"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="blog-details.html">
                        <img src="assets/images/news/news-8.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      <div className="category">
                        <Link href="blog-details.html">Consulting</Link>
                      </div>
                      <h4>
                        <Link href="blog-details.html">
                          Reader’s Look On An Important Steps Needed.
                        </Link>
                      </h4>
                      <ul className="post-info clearfix">
                        <li>
                          <Link href="blog-details.html">Eva Green</Link>
                        </li>
                        <li>Aug 07, 2021</li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consecte adipisicing elit
                          sed do eiusmod tempor incididunt labore aliqua.
                        </p>
                      </div>
                      <div className="btn-box">
                        <Link
                          href="blog-details.html"
                          className="theme-btn btn-two"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500m"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="blog-details.html">
                        <img src="assets/images/news/news-9.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      <div className="category">
                        <Link href="blog-details.html">Consulting</Link>
                      </div>
                      <h4>
                        <Link href="blog-details.html">
                          We’ll Bring You The Best In Donec Luctus.
                        </Link>
                      </h4>
                      <ul className="post-info clearfix">
                        <li>
                          <Link href="blog-details.html">George Clooney</Link>
                        </li>
                        <li>Aug 07, 2021</li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consecte adipisicing elit
                          sed do eiusmod tempor incididunt labore aliqua.
                        </p>
                      </div>
                      <div className="btn-box">
                        <Link
                          href="blog-details.html"
                          className="theme-btn btn-two"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 news-block">
                <div
                  className="news-block-one wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500m"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <Link href="blog-details.html">
                        <img src="assets/images/news/news-10.jpg" alt="" />
                      </Link>
                    </figure>
                    <div className="lower-content">
                      <div className="category">
                        <Link href="blog-details.html">Consulting</Link>
                      </div>
                      <h4>
                        <Link href="blog-details.html">
                          They’re One Of The Industry Thought Leaders.
                        </Link>
                      </h4>
                      <ul className="post-info clearfix">
                        <li>
                          <Link href="blog-details.html">Simon Baker</Link>
                        </li>
                        <li>Aug 07, 2021</li>
                      </ul>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consecte adipisicing elit
                          sed do eiusmod tempor incididunt labore aliqua.
                        </p>
                      </div>
                      <div className="btn-box">
                        <Link
                          href="blog-details.html"
                          className="theme-btn btn-two"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination-wrapper">
              <ul className="pagination clearfix">
                <li>
                  <Link to="/blog">
                    <i className="far fa-angle-left" />
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="current">
                    1
                  </Link>
                </li>
                <li>
                  <Link to="/blog">2</Link>
                </li>
                <li>
                  <Link to="/blog">3</Link>
                </li>
                <li>
                  <Link to="/blog">
                    <i className="far fa-angle-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
          <div className="blog-sidebar default-sidebar">
            <div className="sidebar-widget sidebar-search">
              <div className="widget-title">
                <h3>Search</h3>
              </div>
              <div className="search-inner">
                <form action="blog.html" method="post">
                  <div className="form-group">
                    <input
                      type="search"
                      name="search-field"
                      placeholder="Search"
                      required=""
                    />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="sidebar-widget sidebar-category">
              <div className="widget-title">
                <h3>Categories</h3>
              </div>
              <div className="widget-content">
                <ul className="category-list clearfix">
                  <li>
                    <Link href="blog-details.html">
                      <i className="far fa-long-arrow-right" />
                      Safety Tips
                    </Link>
                  </li>
                  <li>
                    <Link href="blog-details.html">
                      <i className="far fa-long-arrow-right" />
                      Chemical free
                    </Link>
                  </li>
                  <li>
                    <Link href="blog-details.html">
                      <i className="far fa-long-arrow-right" />
                      Mineral Water
                    </Link>
                  </li>
                  <li>
                    <Link href="blog-details.html">
                      <i className="far fa-long-arrow-right" />
                      Filteration
                    </Link>
                  </li>
                  <li>
                    <Link href="blog-details.html">
                      <i className="far fa-long-arrow-right" />
                      Uncategorized
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-widget post-widget">
              <div className="widget-title">
                <h3>Latest News</h3>
              </div>
              <div className="post-inner">
                <div className="post">
                  <figure className="post-thumb">
                    <Link href="blog-details.html">
                      <img src="assets/images/news/post-1.jpg" alt="" />
                    </Link>
                  </figure>
                  <p>April 18, 2021</p>
                  <h5>
                    <Link href="blog-details.html">
                      Consequntur eos magni dolore.
                    </Link>
                  </h5>
                </div>
                <div className="post">
                  <figure className="post-thumb">
                    <Link href="blog-details.html">
                      <img src="assets/images/news/post-2.jpg" alt="" />
                    </Link>
                  </figure>
                  <p>April 18, 2021</p>
                  <h5>
                    <Link href="blog-details.html">
                      Magni dolore qui ratione seque.
                    </Link>
                  </h5>
                </div>
                <div className="post">
                  <figure className="post-thumb">
                    <Link href="blog-details.html">
                      <img src="assets/images/news/post-3.jpg" alt="" />
                    </Link>
                  </figure>
                  <p>April 18, 2021</p>
                  <h5>
                    <Link href="blog-details.html">Ratone magni sed dolore eos.</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="sidebar-widget archives-widget">
              <div className="widget-title">
                <h3>Archives</h3>
              </div>
              <div className="widget-content">
                <ul className="archives-list clearfix">
                  <li>
                    <Link href="blog-details.html">
                      January 2016<span>2</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="blog-details.html">
                      February 2017<span>7</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="blog-details.html">
                      March 2018<span>5</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="blog-details.html">
                      April 2019<span>3</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="blog-details.html">
                      May 2020<span>2</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-widget tags-widget">
              <div className="widget-title">
                <h3>Tags</h3>
              </div>
              <div className="widget-content">
                <ul className="tags-list clearfix">
                  <li>
                    <Link href="blog-details.html">Filteration</Link>
                  </li>
                  <li>
                    <Link href="blog-details.html">Safety Tips</Link>
                  </li>
                  <li>
                    <Link href="blog-details.html">Chemical Free</Link>
                  </li>
                  <li>
                    <Link href="blog-details.html">Minerals</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* sidebar-page-container end */}
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

    )
}

export default Blog
