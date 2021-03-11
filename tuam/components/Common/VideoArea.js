import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import { withTranslation } from 'react-i18next';

class VideoArea extends Component {

    state = {
        isOpen: false,
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <section className="video-area ptb-100 pb-0">
                    <div className="container">
                        <div className="video-content">
                            <h2>{t('Watch Video.1')}</h2>
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
                           
                                <span>{t('Watch Video.2')}</span>
                            </div>
                        </div>
                    </div>
                </section>

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

export default withTranslation()(VideoArea);