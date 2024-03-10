import React from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../common/Preloader'
import Header from '../common/Header'

const Cart = () => {
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
                    <Link to="/checkout" className="theme-btn btn-one">
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

export default Cart