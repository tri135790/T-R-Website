import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer-area">
                    <div className="container">
                        <div className="subscribe-area">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-12">
                                    <div className="subscribe-content">
                                        <h2>Join Our Newsletter</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-12">
                                    <div className="subscribe-form">
                                        <form className="newsletter-form">
                                            <input type="email" className="input-newsletter" placeholder="Enter your email address" name="EMAIL" />
                                            <button type="submit">
                                                Subscribe Now <i className="flaticon-right-chevron"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img src="/images/white-logo.png" alt="image" />
                                            </a>
                                        </Link>

                                        <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra lacus vel facilisis.</p>
                                    </div>

                                    <ul className="social">
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="flaticon-facebook"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="flaticon-twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="flaticon-linkedin"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="flaticon-instagram"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Quick Links</h3>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/team">
                                                <a>Our Team</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>About Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/news1">
                                                <a>Latest News</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/the-place">
                                                <a>The Place</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/events">
                                                <a>Our Events</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Our Packages</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact Us</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
                                <div className="single-footer-widget">
                                    <h3>Contact Info</h3>

                                    <ul className="footer-contact-info">
                                        <li><span>Location:</span> 27 Division St, New York, NY 10002, USA</li>
                                        <li><span>Email:</span> <a href="#">tuam@gmail.com</a></li>
                                        <li><span>Phone:</span> <a href="#">+(321) 948 754</a></li>
                                        <li><span>Fax:</span> <a href="#">+1-212-9876543</a></li>
                                        <li><a href="https://goo.gl/maps/1xz4L8TGSdkBhVmb7" target="_blank">View Location on GoogleMap</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p><i className="far fa-copyright"></i> 2021 Tuam. All Rights Reserved by <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;