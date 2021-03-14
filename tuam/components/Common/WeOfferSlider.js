import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { withTranslation } from 'react-i18next';
// import { withTranslation } from 'next-i18next';
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
        const { t } = this.props;
        return (
            <React.Fragment>
                <section className="services-area ptb-100 bg-f8f8f8">
                    <div className="container">
                        <div className="section-title">
                            <h2>{t('Products.2')}</h2>
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
                                            <a>{t('Products.3')}</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod</p>
                                </div>
                            </div>

                            <div className="services-box">
                                <img src="/images/gallery/gallery2.jpg" alt="image" />

                                <div className="services-content">
                                    <h3>
                                        <Link href="#">
                                            <a>{t('Products.4')}</a>
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
                                            <a>{t('Products.5')}</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod</p>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default withTranslation()(WeOfferSlider);