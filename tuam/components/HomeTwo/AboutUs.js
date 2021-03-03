import React, { Component } from 'react';
import Link from 'next/link';

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="about-section ptb-100">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <div className="img1">
                                        <img src="/images/about/about1.jpg" alt="image" />
                                    </div>

                                    <div className="img2">
                                        <img src="/images/about/about2.jpg" alt="image" />
                                    </div>

                                    <div className="img3">
                                        <img src="/images/about/about3.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <span className="sub-title">About Us</span>
                                    <h2>Professional, Creative, Flexible, Scalable Workspace</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                    <ul className="features-list">
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-work"></i>
                                            </div>
                                            <span>Trusted by Thousands</span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-target"></i>
                                            </div>
                                            <span>Workspace Solutions</span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </li>
                                    </ul>
                                    
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                    <Link href="/about">
                                        <a className="read-more-btn">
                                            More About Us <i className="flaticon-next"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default AboutUs;