import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/css/modal-video.min.css';
import dynamic from 'next/dynamic';
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
        display:false,
        isOpen: false,
    }

    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
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
                                            <span className="sub-title">The Best Workspace in New York</span>
                                            <h1>Professional, Creative, Flexible, Scalable Workspace</h1>

                                            <div className="btn-box">
                                                <Link href="#">
                                                    <a className="default-btn">
                                                        Book A Room <span></span>
                                                    </a>
                                                </Link>

                                                {/* <div
                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                    className="optional-btn"
                                                > 
                                                    <i className="flaticon-play-button"></i> Watch Video
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-banner item-bg3">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="main-banner-content">
                                            <span className="sub-title">The Best Workspace in New York</span>
                                            <h1>Professional, Creative, Flexible, Scalable Workspace</h1>

                                            <div className="btn-box">
                                                <Link href="#">
                                                    <a className="default-btn">
                                                        Book A Room <span></span>
                                                    </a>
                                                </Link>

                                                {/* <div
                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                    className="optional-btn"
                                                > 
                                                    <i className="flaticon-play-button"></i> Watch Video
                                                </div> */}
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
                                            <span className="sub-title">The Best Workspace in New York</span>
                                            <h1>Professional, Creative, Flexible, Scalable Workspace</h1>

                                            <div className="btn-box">
                                                <Link href="#">
                                                    <a className="default-btn">
                                                        Book A Room <span></span>
                                                    </a>
                                                </Link>

                                                {/* <div
                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                    className="optional-btn"
                                                > 
                                                    <i className="flaticon-play-button"></i> Watch Video
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
 
                    <div className="banner-footer">
                        <div className="container-fluid p-0">
                            <div className="row m-0 align-items-center">
                                <div className="col-lg-5 col-md-12 p-0">
                                    {/* <div className="banner-video">
                                        <div
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn"
                                        > 
                                            <i className="flaticon-play-button-1"></i>
                                        </div>
                                  
                                        <span>Watch Video</span>
                                    </div> */}
                                </div>

                                <div className="col-lg-7 col-md-12 p-0">
                                    <div className="banner-contact-info">
                                        <ul>
                                            <li>
                                                <i className="flaticon-location"></i>
                                                <span>Office Address</span>
                                                27 Division St, New York, NY 10002, USA
                                            </li>

                                            <li>
                                                <i className="flaticon-email"></i>
                                                <span>Email Address</span>
                                                <a href="#">info@tuam.com</a>
                                                <a href="#">support@tuam.com</a>
                                            </li>

                                            <li>
                                                <i className="flaticon-calendar"></i>
                                                <span>Office Hour</span>
                                                Mon - Fri, 8 AM - 10 PM (Members are 24/7)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </React.Fragment>
        );
    }
}

export default Banner;