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
                                    <h2>High Quality, Global Export</h2>
                                    <p>T-R Construction Import Export Trading Service Co., Ltd, established on 03/08/2016, is one of the leading corporations in Viet Nam to produce N95 mask, medical gown and distrube medical products to international market. We also supply other essential medical products such as medicalgloves and ventilator made in Viet Nam and Japan.</p>

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
                                    
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p> */}

                                    <Link href="/about">
                                        <a className="read-more-btn">
                                            See our ISO &amp; FDA Certifications <i className="flaticon-next"></i>
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