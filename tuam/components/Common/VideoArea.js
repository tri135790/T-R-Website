import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class VideoArea extends Component {

    state = {
        isOpen: false,
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                <section className="video-area ptb-100 pb-0">
                    <div className="container">
                        <div className="video-content">
                            <h2>Watch this video presentation to know more about our Products</h2>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                        </div>

                        <div className="video-box">
                            <img src="/images/video-img.jpg" alt="image" />

                            <div className="play-video">
                                <div
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    className="video-btn"
                                > 
                                    <i className="flaticon-play-button-1"></i>
                                </div>
                           
                                <span>Watch Now</span>
                            </div>
                        </div>
                    </div>
                </section>

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

export default VideoArea;