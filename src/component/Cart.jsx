import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
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
              <h1>Cart Page</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Cart Page</li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Page Title */}
        {/* cart section */}
        <section className="cart-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 table-column">
                <div className="table-outer">
                  <table className="cart-table">
                    <thead className="cart-header">
                      <tr>
                        <th>&nbsp;</th>
                        <th className="prod-column">Product Name</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th className="price">Price</th>
                        <th className="quantity">Quantity</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={4} className="prod-column">
                          <div className="column-box">
                            <div className="remove-btn">
                              <i className="fal fa-times" />
                            </div>
                            <div className="prod-thumb">
                              <img
                                src="assets/images/resource/shop/cart-1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="prod-title">Mineral Water Bottle</div>
                          </div>
                        </td>
                        <td className="price">$35.00</td>
                        <td className="qty">
                          <div className="item-quantity">
                            <input
                              className="quantity-spinner"
                              type="text"
                              defaultValue={1}
                              name="quantity"
                            />
                          </div>
                        </td>
                        <td className="sub-total">$35.00</td>
                      </tr>
                      <tr>
                        <td colSpan={4} className="prod-column">
                          <div className="column-box">
                            <div className="remove-btn">
                              <i className="fal fa-times" />
                            </div>
                            <div className="prod-thumb">
                              <img
                                src="assets/images/resource/shop/cart-2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="prod-title">Mineral Water Bottle</div>
                          </div>
                        </td>
                        <td className="price">$40.00</td>
                        <td className="qty">
                          <div className="item-quantity">
                            <input
                              className="quantity-spinner"
                              type="text"
                              defaultValue={1}
                              name="quantity"
                            />
                          </div>
                        </td>
                        <td className="sub-total">$40.00</td>
                      </tr>
                      <tr>
                        <td colSpan={4} className="prod-column">
                          <div className="column-box">
                            <div className="remove-btn">
                              <i className="fal fa-times" />
                            </div>
                            <div className="prod-thumb">
                              <img
                                src="assets/images/resource/shop/cart-3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="prod-title">Mineral Water Bottle</div>
                          </div>
                        </td>
                        <td className="price">$45.00</td>
                        <td className="qty">
                          <div className="item-quantity">
                            <input
                              className="quantity-spinner"
                              type="text"
                              defaultValue={1}
                              name="quantity"
                            />
                          </div>
                        </td>
                        <td className="sub-total">$45.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="othre-content clearfix">
              <div className="coupon-box pull-left clearfix">
                <input type="text" placeholder="Enter coupon code..." />
                <button type="button">Apply coupon</button>
              </div>
              <div className="update-btn pull-right">
                <button type="button" className="theme-btn btn-two">
                  Update Cart
                </button>
              </div>
            </div>
            <div className="cart-total">
              <div className="row">
                <div className="col-xl-5 col-lg-12 col-md-12 offset-xl-7 cart-column">
                  <div className="total-cart-box clearfix">
                    <h6>Cart Totals</h6>
                    <ul className="list clearfix">
                      <li>
                        Subtotal:<span>$150.50</span>
                      </li>
                      <li>
                        Order Total:<span>$150.50</span>
                      </li>
                    </ul>
                    <Link href="/cart" className="theme-btn btn-one">
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* cart section end */}
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
                          Call Us:
                          <Link href="tel:3336660001">333-666-0001</Link>
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

export default Cart