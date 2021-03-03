import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="why-choose-us-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <div className="why-choose-us-image">
                                    <img src="/images/why-choose-img1.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="why-choose-us-content">
                                    <div className="content">
                                        <span className="sub-title">Your Benefits</span>
                                        <h2>Why Choose Us</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                        <ul className="features-list">
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-layers"></i>
                                                </div>
                                                <span>Creative Space</span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-security"></i>
                                                </div>
                                                <span>24/7 Access</span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-wifi"></i>
                                                </div>
                                                <span>High Speed Wifi</span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-location"></i>
                                                </div>
                                                <span>Great Location</span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-taxi"></i>
                                                </div>
                                                <span>Car Sharing</span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-calendar"></i>
                                                </div>
                                                <span>Weekly Events</span>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default WhyChooseUs;