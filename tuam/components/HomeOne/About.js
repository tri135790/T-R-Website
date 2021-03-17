import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <>
                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-title">
                                    <span>About Us</span>
                                    <h2>We offer creative working environments that suit your business</h2>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-text">
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
            </>
        );
    }
}

export default About;