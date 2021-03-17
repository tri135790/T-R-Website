import React, { Component } from 'react';
import Link from 'next/link';

class ServicesBoxes extends Component {
    render() {
        return (
            <>
                <section className="services-boxes-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-box">
                                    <img src="/images/services/services1.jpg" alt="image" />

                                    <div className="content">
                                        <h3>
                                            <Link href="/service-details">
                                                <a>Office Spaces</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <div className="hover-content">
                                        <h3>
                                            <Link href="/service-details">
                                                <a>Office Spaces</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut labore et dolore.</p>

                                        <Link href="/service-details">
                                            <a className="read-more-btn">Learn More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-box">
                                    <img src="/images/services/services2.jpg" alt="image" />

                                    <div className="content">
                                        <h3>
                                            <Link href="/service-details">
                                                <a>Coworking</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <div className="hover-content">
                                        <h3>
                                            <Link href="/service-details">
                                                <a>Coworking</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut labore et dolore.</p>

                                        <Link href="/service-details">
                                            <a className="read-more-btn">Learn More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-box">
                                    <img src="/images/services/services3.jpg" alt="image" />

                                    <div className="content">
                                        <h3>
                                            <Link href="/service-details">
                                                <a>Meeting Spaces</a>
                                            </Link>
                                        </h3>
                                    </div>

                                    <div className="hover-content">
                                        <h3>
                                            <Link href="/service-details">
                                                <a>Meeting Spaces</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod incididunt ut labore et dolore.</p>

                                        <Link href="/service-details">
                                            <a className="read-more-btn">Learn More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ServicesBoxes;