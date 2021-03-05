import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
}


class WeOfferSlider extends Component {

    _isMounted = false;
    state = {
        display:false
    }

    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <React.Fragment>
                <section className="services-area ptb-100 bg-f8f8f8">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Products</h2>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                        </div>

                        {this.state.display ? <OwlCarousel 
                            className="main-services-slides owl-carousel owl-theme"
                            {...options}
                        > 
                            <div className="services-box">
                                <img src="/images/gallery/gallery1.jpg" alt="image" />

                                <div className="services-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Medical Mask 3-Ply</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod</p>
                                </div>
                            </div>

                            <div className="services-box">
                                <img src="/images/gallery/gallery2.jfif" alt="image" />

                                <div className="services-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Medical Gloves</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod</p>
                                </div>
                            </div>

                            <div className="services-box">
                                <img src="/images/gallery/gallery3.jpg" alt="image" />

                                <div className="services-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Medical Gown</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod</p>
                                </div>
                            </div>

                            {/* <div className="services-box">
                                <img src="/images/gallery/gallery4.jpg" alt="image" />

                                <div className="services-content">
                                    <h3>
                                        <Link href="#">
                                            <a>T-R Mask N95</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod</p>
                                </div>
                            </div> */}
                        </OwlCarousel> : ''}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default WeOfferSlider;