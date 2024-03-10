import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
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
                                                    <Link to="/cart">Cart</Link>
                                                </li>
                                                <li>
                                                    <Link to="/checkout">Checkout</Link>
                                                </li>
                                                <li>
                                                    <Link to="/faq">Faq's</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/service">Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
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
                                <Link to="/cart">
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
                                                    <Link to="/cart">Cart</Link>
                                                </li>
                                                <li>
                                                    <Link to="/checkout">Checkout</Link>
                                                </li>
                                                <li>
                                                    <Link to="/faq">Faq's</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/service">Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
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
        </div>
    )
}

export default Header
