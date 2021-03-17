import React, { Component } from 'react';
import Link from 'next/link';

class ContactContent extends Component {
    render() {
        return (
            <>
                <section className="contact-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="section-title">
                                    <span className="sub-title">Contact Us</span>
                                    <h2>Say Hello</h2>
                                    <p>Your email address will not be published. We promise not to spam!</p>
                                </div>

                                <div className="contact-info">
                                    <ul className="contact-list">
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-location"></i>
                                            </div>
                                            <span>Address</span>
                                            CA 560 Bush St & 20th Ave, Apt 5 San Francisco, 230909, Canada
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-email"></i>
                                            </div>
                                            <span>Email</span>
                                            tuam@email.com <br />
                                            fax@email.com
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone-volume"></i>
                                            </div>
                                            <span>Phone</span>
                                            +44 587 154756 <br />
                                            +55 5555 14574
                                        </li>
                                    </ul>

                                    <ul className="social">
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="flaticon-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="flaticon-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="flaticon-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="flaticon-instagram"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="section-title">
                                    <span className="sub-title">Have a Question?</span>
                                    <h2>Send a Message</h2>
                                    <p>Your email address will not be published. We promise not to spam!</p>
                                </div>

                                <div className="contact-form">
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="name" id="name" className="form-control" required placeholder="Name" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="email" name="email" id="email" className="form-control" required placeholder="Email" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="Subject" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control" id="message" cols="30" rows="6" required placeholder="Your Message"></textarea>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="default-btn">
                                                    Send Message <span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-map">
                        <img src="/images/bg-map.png" alt="image" />
                    </div>
                </section>
            </>
        );
    }
}

export default ContactContent;