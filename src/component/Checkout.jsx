import React from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../common/Preloader'
import Header from '../common/Header'
import axios from "axios"
import { useForm } from 'react-hook-form';
const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        throw new Error('Failed to save data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  return (
    <div>
      <div className="boxed_wrapper">
        {/* preloader */}

        {/* <Preloader/> */}
        {/* preloader end */}
        {/* main header */}
        <Header />
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
              <h1>Checkout</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Checkout</li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Page Title */}
        {/* checkout-section */}
        <section className="checkout-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 upper-column">
                <div className="upper-box">
                  <div className="customer single-box">
                    Returning Customer?
                    <Link to="checkbox.html">Click here to Login</Link>
                  </div>
                  <div className="coupon single-box">
                    Have a Coupon?
                    <Link to="checkbox.html">Click here to enter your code</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                <div className="inner-box">
                  <div className="billing-info">
                    <h4 className="sub-title">Billing Details</h4>

                    <form onSubmit={handleSubmit(onSubmit)} className="billing-form">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <label>First Name*</label>
                          <div className="field-input">
                            <input type="text" {...register("first_name", { required: "First Name is required" })} />
                            {errors.first_name && <div>{errors.first_name.message}</div>}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <label>Last Name*</label>
                          <div className="field-input">
                            <input type="text" {...register("last_name", { required: "Last Name is required" })} />
                            {errors.last_name && <div>{errors.last_name.message}</div>}
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <label>Company Name*</label>
                          <div className="field-input">
                            <input type="text" {...register("company_name", { required: "Company Name is required" })} />
                            {errors.company_name && <div>{errors.company_name.message}</div>}
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <label>Email Address*</label>
                          <div className="field-input">
                            <input type="email" {...register("email", { required: "Email is required" })} />
                            {errors.email && <div>{errors.email.message}</div>}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <label>Phone Number*</label>
                          <div className="field-input">
                            <input type="text" {...register("phone", { required: "Phone Number is required" })} />
                            {errors.phone && <div>{errors.phone.message}</div>}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <label>Country*</label>
                          <div className="select-column select-box">
                            <select className="selectmenu" {...register("country", { required: "Country is required" })}>
                              <option value="" disabled>Select Option</option>
                              <option value="United States">United States</option>
                              <option value="Australia">Australia</option>
                              <option value="Canada">Canada</option>
                            </select>
                            {errors.country && <div>{errors.country.message}</div>}
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <label>Address*</label>
                          <div className="field-input">
                            <input type="text" {...register("address", { required: "Address is required" })} className="address" />
                            {errors.address && <div>{errors.address.message}</div>}
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <label>Town/City*</label>
                          <div className="field-input">
                            <input type="text" {...register("town_city", { required: "Town/City is required" })} />
                            {errors.town_city && <div>{errors.town_city.message}</div>}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <label>State*</label>
                          <div className="select-column select-box">
                            <select className="selectmenu" {...register("state", { required: "State is required" })}>
                              <option value="" disabled>Select Option</option>
                              <option value="New York">New York</option>
                              <option value="California">California</option>
                              <option value="Texas">Texas</option>
                            </select>
                            {errors.state && <div>{errors.state.message}</div>}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <label>Zip Code*</label>
                          <div className="field-input">
                            <input type="text" {...register("zip", { required: "Zip Code is required" })} />
                            {errors.zip && <div>{errors.zip.message}</div>}
                          </div>
                        </div>
                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                          <div className="create-acc">
                            <div className="custom-controls-stacked">

                            </div>
                          </div>
                        </div>
                        <div className="payment-info">
                          <h4 className="sub-title">Payment Proccess</h4>
                          <div className="payment-inner">
                            <div className="option-block">
                              <div className="custom-controls-stacked">
                                <label className="custom-control material-checkbox">
                                  <input
                                    name="payment_method"
                                    type="radio"
                                    value="direct_bank_transfer"
                                    {...register("payment_method")}
                                    className="material-control-input"
                                  />
                                  <span className="material-control-indicator" />
                                  <span className="description">Direct bank transfer</span>
                                </label>
                              </div>
                              <p>
                                Please send a check to Store Name, Store Street, Store Town,
                                Store State / County, Store Postcode.
                              </p>
                            </div>
                            <div className="option-block">
                              <div className="custom-controls-stacked">
                                <label className="custom-control material-checkbox">
                                  <input
                                    name="payment_method"
                                    type="radio"
                                    value="cash"
                                    {...register("payment_method")}
                                    className="material-control-input"
                                  />
                                  <span className="material-control-indicator" />
                                  <span className="description">
                                    Cash
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="btn-box">
                              {/* <Link to="/checkout" > */}
                              <button type="submit" className="theme-btn btn-one">Place Your Order</button>
                                
                              {/* </Link> */}
                            </div>
                          </div>
                        </div>


                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 right-column">
                <div className="inner-box">
                  <div className="order-info">
                    <h4 className="sub-title">Your Order</h4>
                    <div className="order-product">
                      <ul className="order-list clearfix">
                        <li className="title clearfix">
                          <p>Product</p>
                          <span>Total</span>
                        </li>
                        <li>
                          <div className="single-box clearfix">
                            <img
                              src="assets/images/resource/shop/order-1.jpg"
                              alt=""
                            />
                            <h6>Mineral Water Bottle x 1</h6>
                            <span>$35.00</span>
                          </div>
                        </li>
                        <li>
                          <div className="single-box clearfix">
                            <img
                              src="assets/images/resource/shop/order-2.jpg"
                              alt=""
                            />
                            <h6>Mineral Water Bottle x 1</h6>
                            <span>$25.00</span>
                          </div>
                        </li>
                        <li>
                          <div className="single-box clearfix">
                            <img
                              src="assets/images/resource/shop/order-3.jpg"
                              alt=""
                            />
                            <h6>Mineral Water Bottle x 1</h6>
                            <span>$90.00</span>
                          </div>
                        </li>
                        <li className="sub-total clearfix">
                          <h6>Sub Total</h6>
                          <span>$150.50</span>
                        </li>
                        <li className="order-total clearfix">
                          <h6>Order Total</h6>
                          <span>$150.50</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* checkout-section end */}
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

export default Checkout
