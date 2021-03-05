import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class NavbarTwo extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <React.Fragment>
                <div id="navbar" className="navbar-area navbar-style-two">
                    <div className="tuam-nav">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src="/images/white-logo.png" alt="logo" className="white-logo" />
                                        
                                        {/* For mobile device */}
                                        <img src="/images/logo.png" alt="logo" className="logo" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link href="/#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Home 
                                                </a>
                                            </Link>
                                            {/* <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/" activeClassName="active">
                                                        <a className="nav-link">Home One</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/index2" activeClassName="active">
                                                        <a className="nav-link">Home Two</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/index3" activeClassName="active">
                                                        <a className="nav-link">Home Three</a>
                                                    </Link>
                                                </li>
                                            </ul> */}
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about" activeClassName="active">
                                                <a className="nav-link">About Us</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/products" activeClassName="active">
                                                <a className="nav-link">Products</a>
                                            </Link>
                                        </li>

                                        {/* <li className="nav-item">
                                            <Link href="/#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Event <i className="flaticon-down-arrow"></i>
                                                </a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/events" activeClassName="active">
                                                        <a className="nav-link">Events</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/event-details" activeClassName="active">
                                                        <a className="nav-link">Event Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}

                                        {/* <li className="nav-item">
                                            <Link href="/#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    Pages <i className="flaticon-down-arrow"></i>
                                                </a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/gallery" activeClassName="active">
                                                        <a className="nav-link">Gallery</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/#">
                                                        <a className="nav-link" onClick={e => e.preventDefault()}>Services</a>
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <Link href="/services" activeClassName="active">
                                                                <a className="nav-link">Services</a>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link href="/service-details" activeClassName="active">
                                                                <a className="nav-link">Service Details</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/pricing" activeClassName="active">
                                                        <a className="nav-link">Pricing</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/team" activeClassName="active">
                                                        <a className="nav-link">Team</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/404" activeClassName="active">
                                                        <a className="nav-link">404 Error</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    News <i className="flaticon-down-arrow"></i>
                                                </a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/news1" activeClassName="active">
                                                        <a className="nav-link">News Grid</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/news2" activeClassName="active">
                                                        <a className="nav-link">News Right Sidebar</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/news-details" activeClassName="active">
                                                        <a className="nav-link">News Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}

                                        <li className="nav-item">
                                            <Link href="/contact" activeClassName="active">
                                                <a className="nav-link">Contact Us</a>
                                            </Link>
                                        </li>
                                    </ul>

                                    <div className="others-option">
                                        <div className="call-us">
                                            <div className="icon">
                                                <i className="flaticon-call"></i>
                                            </div>
                                            Call Us:
                                            <span className="number">+1 518 285679</span>
                                        </div>

                                        {/* <Link href="/#">
                                            <a className="default-btn">Schedule A Tour<span></span></a>
                                        </Link> */}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NavbarTwo;