import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
}

class FDACertificationSlider extends Component {

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
            <>
                <div className="feedback-area ptb-100">
                    <div className="container">
                    {this.state.display ? <OwlCarousel 
                            className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="iso-certification-item">
                                <img src="/images/certificate/fda1.jpg" alt="image" />
                            </div>
                            <div className="iso-certification-item">
                                <img src="/images/certificate/fda2.jpg" alt="image" />
                            </div>
                            <div className="iso-certification-item">
                                <img src="/images/certificate/fda3.jpg" alt="image" />
                            </div>
                            <div className="iso-certification-item">
                                <img src="/images/certificate/fda4.jpg" alt="image" />
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </>
        );
    }
}

export default FDACertificationSlider;