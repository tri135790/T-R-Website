import React, { Component } from 'react';
import Link from 'next/link';
import { withTranslation } from 'react-i18next';
// import { withTranslation } from 'next-i18next';

class Footer extends Component {
    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <footer className="footer-area">
                    <div className="container">
                        <div className="subscribe-area">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-12">
                                    <div className="subscribe-content">
                                        <h2>{t('Footer.1')}</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-12">
                                    <div className="subscribe-form">
                                        <form className="newsletter-form">
                                            <input type="email" className="input-newsletter" placeholder={t('Footer.11')} name="EMAIL" />
                                            <button type="submit">
                                            {t('Footer.2')} <i className="flaticon-right-chevron"></i>
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
                                                <img src="/images/white-logo.png" alt="image" className="white-logo" />
                                            </a>
                                        </Link>

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

                            {/* <div className="col-lg-4 col-md-6 col-sm-6">
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
                            </div> */}

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
                                <div className="single-footer-widget">
                                    <h3>{t('Footer.4')}</h3>

                                    <ul className="footer-contact-info">
                                        <li><span>{t('Footer.5')}</span>{t('Footer.7')}</li>
                                        <li><span>{t('Footer.6')}</span>{t('Footer.8')}</li>
                                        <li><span>Email:</span> <a href="#">t-rgroup@t-r.com.vn</a></li>
                                        <li><span>{t('Footer.9')}</span> <a href="#">+(84) 933 278 434</a></li>
                                        <li><a href="https://goo.gl/maps/1xz4L8TGSdkBhVmb7" target="_blank">{t('Footer.10')}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p><i className="far fa-copyright"></i> COPPYRIGHT 2020 @T - R COMPANY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default withTranslation()(Footer);