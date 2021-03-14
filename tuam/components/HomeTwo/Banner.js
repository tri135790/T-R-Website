import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/css/modal-video.min.css';
import dynamic from 'next/dynamic';
import { withTranslation } from 'react-i18next';

const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    animateOut: "slideOutDown",
    animateIn: "slideInDown",
    items: 1,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ]
}

class Banner extends Component {

    _isMounted = false;
    state = {
        display: false,
        isOpen: false,
    }

    componentDidMount() {
        this._isMounted = true;
        this.setState({ display: true })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    openModal = () => {
        this.setState({ isOpen: true })
    }

    render() {

        const { t } = this.props;
        return (
            <React.Fragment>
                <div className="home-section">
                    {this.state.display ? <OwlCarousel
                        className="home-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="main-banner item-bg5">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="main-banner-content">
                                            <h1>
                                                {t('Title.1')}
                                            </h1>

                                            <div className="btn-box">
                                                <Link href="#">
                                                    <a className="default-btn">
                                                    {t('About Us.1')} <span></span>
                                                    </a>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="main-banner item-bg1">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="main-banner-content">
                                            <h1>{t('Title.1')}</h1>

                                            <div className="btn-box">
                                                <Link href="#">
                                                    <a className="default-btn">
                                                    {t('About Us.1')} <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
                <ModalVideo
                    channel='youtube'
                    isOpen={this.state.isOpen}
                    videoId='szuchBiLrEM'
                    onClose={() => this.setState({ isOpen: false })}
                />
            </React.Fragment>
        );
    }
}

export default withTranslation()(Banner);