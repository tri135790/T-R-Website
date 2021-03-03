import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
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
                {this.state.display ? <OwlCarousel 
                    className="home-area home-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="main-banner item-bg1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="main-banner-content">
                                        <span className="sub-title">The Best Workspace in New York</span>
                                        <h1>Professional, Creative, Flexible, Scalable Workspace</h1>

                                        <div className="btn-box">
                                            <Link href="#">
                                                <a className="default-btn">Book A Room <span></span></a>
                                            </Link>

                                            <div
                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                                className="optional-btn"
                                            > 
                                                <i className="flaticon-play-button"></i> Watch Video
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
 
                    <div className="main-banner item-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="main-banner-content">
                                        <span className="sub-title">The Best Workspace in New York</span>
                                        <h1>Professional, Creative, Flexible, Scalable Workspace</h1>

                                        <div className="btn-box">
                                            <Link href="#">
                                                <a className="default-btn">Book A Room <span></span></a>
                                            </Link>

                                            <div
                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                                className="optional-btn"
                                            > 
                                                <i className="flaticon-play-button"></i> Watch Video
                                            </div>
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
                                                <a className="default-btn">Book A Room <span></span></a>
                                            </Link>

                                            <div
                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                                className="optional-btn"
                                            > 
                                                <i className="flaticon-play-button"></i> Watch Video
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}

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