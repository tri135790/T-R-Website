import React, { Component } from 'react';
import Link from 'next/link';

class EventContent extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="event-area ptb-100">
                    <div className="container">
                        <div className="single-event-box">
                            <div className="event-image">
                                <div className="image bg1">
                                    <img src="/images/event/event1.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="event-content">
                                <div className="content">
                                    <h3>
                                        <Link href="#">
                                            <a>Web Development</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit consequat.</p>

                                    <div className="date">
                                        18
                                        <sup>Jan</sup>
                                        <sub>2020</sub>
                                    </div>

                                    <ul>
                                        <li>
                                            <span>Where</span>
                                            Fort Mason Center Victoria City, Canada
                                        </li>
                                        <li>
                                            <span>When</span>
                                            Sunday (3.30PM - 6.30PM)
                                        </li>
                                    </ul>

                                    <Link href="#">
                                        <a className="default-btn">
                                            More Info <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="single-event-box">
                            <div className="event-content">
                                <div className="content">
                                    <h3>
                                        <Link href="#">
                                            <a>Ruby on Rails Framework</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit consequat.</p>

                                    <div className="date">
                                        20
                                        <sup>Jan</sup>
                                        <sub>2020</sub>
                                    </div>

                                    <ul>
                                        <li>
                                            <span>Where</span>
                                            Fort Mason Center Victoria City, Canada
                                        </li>
                                        <li>
                                            <span>When</span>
                                            Sunday (3.30PM - 6.30PM)
                                        </li>
                                    </ul>

                                    <Link href="#">
                                        <a className="default-btn">
                                            More Info <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="event-image">
                                <div className="image bg2">
                                    <img src="/images/event/event2.jpg" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="single-event-box">
                            <div className="event-image">
                                <div className="image bg3">
                                    <img src="/images/event/event3.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="event-content">
                                <div className="content">
                                    <h3>
                                        <Link href="#">
                                            <a>Angular Web Development</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit consequat.</p>

                                    <div className="date">
                                        22
                                        <sup>Jan</sup>
                                        <sub>2020</sub>
                                    </div>

                                    <ul>
                                        <li>
                                            <span>Where</span>
                                            Fort Mason Center Victoria City, Canada
                                        </li>

                                        <li>
                                            <span>When</span>
                                            Sunday (3.30PM - 6.30PM)
                                        </li>
                                    </ul>

                                    <Link href="#">
                                        <a className="default-btn">
                                            More Info <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="single-event-box">
                            <div className="event-content">
                                <div className="content">
                                    <h3>
                                        <Link href="#">
                                            <a>WordPress Framework</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit consequat.</p>

                                    <div className="date">
                                        26
                                        <sup>Jan</sup>
                                        <sub>2020</sub>
                                    </div>

                                    <ul>
                                        <li>
                                            <span>Where</span>
                                            Fort Mason Center Victoria City, Canada
                                        </li>

                                        <li>
                                            <span>When</span>
                                            Sunday (3.30PM - 6.30PM)
                                        </li>
                                    </ul>

                                    <Link href="#">
                                        <a className="default-btn">
                                            More Info <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="event-image">
                                <div className="image bg4">
                                    <img src="/images/event/event4.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default EventContent;