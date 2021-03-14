import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { withNamespaces } from 'react-i18next';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 3,
            margin: 10,
        },
        576: {
            items: 4,
        },
        768: {
            items: 5,
        },
        1200: {
            items: 7,
        }
    }
}

class Partner extends Component {

    _isMounted = false;
    state = {
        display: false,
    }

    componentDidMount() {
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
                <section className="partner-area ptb-100 bg-f8f8f8">
                    <div className="container">
                        <div className="partner-title">
                            <h2>{t('Partner.1')}</h2>
                        </div>

                        {this.state.display ? <OwlCarousel
                            className="partner-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src="/images/partner/partner1.png" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src="/images/partner/partner2.png" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src="/images/partner/partner3.png" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src="/images/partner/partner4.png" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src="/images/partner/partner5.png" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src="/images/partner/partner6.png" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src="/images/partner/partner7.png" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default withNamespaces()(Partner);