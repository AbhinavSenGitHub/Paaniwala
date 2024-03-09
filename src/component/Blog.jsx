import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <div>
            <div className="boxed_wrapper">
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
                                    <Link to="/index">
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
                                    {/* <Link href="https://krishnacoderr.000webhostapp.com/">Portfolio</Link> */}
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
                                        <Link href="checkbox.html">Click here to Login</Link>
                                    </div>
                                    <div className="coupon single-box">
                                        Have a Coupon?
                                        <Link href="checkbox.html">Click here to enter your code</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                                <div className="inner-box">
                                    <div className="billing-info">
                                        <h4 className="sub-title">Billing Details</h4>
                                        <form action="#" method="post" className="billing-form">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>First Name*</label>
                                                    <div className="field-input">
                                                        <input type="text" name="first_name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>Last Name*</label>
                                                    <div className="field-input">
                                                        <input type="text" name="last_name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Company Name*</label>
                                                    <div className="field-input">
                                                        <input type="text" name="company_name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Email Address*</label>
                                                    <div className="field-input">
                                                        <input type="email" name="email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>Phone Number*</label>
                                                    <div className="field-input">
                                                        <input type="text" name="phone" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>Country*</label>
                                                    <div className="select-column select-box">
                                                        <select className="selectmenu" id="ui-id-1">
                                                            <option selected="selected">Select Option</option>
                                                            <option>United State</option>
                                                            <option>Australia</option>
                                                            <option>Canada</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Address*</label>
                                                    <div className="field-input">
                                                        <input type="text" name="address" className="address" />
                                                        <input type="text" name="address" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Town/City*</label>
                                                    <div className="field-input">
                                                        <input type="text" name="town_city" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>State*</label>
                                                    <div className="select-column select-box">
                                                        <select className="selectmenu" id="ui-id-2">
                                                            <option selected="selected">Select Option</option>
                                                            <option>United State</option>
                                                            <option>Australia</option>
                                                            <option>Canada</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>Zip Code*</label>
                                                    <div className="field-input">
                                                        <input type="text" name="zip" />
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <div className="create-acc">
                                                        <div className="custom-controls-stacked">
                                                            <label className="custom-control material-checkbox">
                                                                <input
                                                                    type="checkbox"
                                                                    className="material-control-input"
                                                                />
                                                                <span className="material-control-indicator" />
                                                                <span className="description">
                                                                    Create an Account?
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="additional-info">
                                        <div className="note-book">
                                            <label>Order Notes</label>
                                            <textarea
                                                name="note_box"
                                                placeholder="Notes about your order, e.g. special notes for your delivery"
                                                defaultValue={""}
                                            />
                                        </div>
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
                                    <div className="payment-info">
                                        <h4 className="sub-title">Payment Proccess</h4>
                                        <div className="payment-inner">
                                            <div className="option-block">
                                                <div className="custom-controls-stacked">
                                                    <label className="custom-control material-checkbox">
                                                        <input
                                                            type="checkbox"
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
                                                            type="checkbox"
                                                            className="material-control-input"
                                                        />
                                                        <span className="material-control-indicator" />
                                                        <span className="description">
                                                            Paypal<Link href="/checkout">What is paypal?</Link>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="/checkout" className="theme-btn btn-one">
                                                    Place Your Order
                                                </Link>
                                            </div>
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

export default Blog
