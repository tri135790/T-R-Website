import React, {useState} from 'react';
import ModalVideo from 'react-modal-video';
import {useTranslation} from 'next-i18next';
import { Player } from 'video-react';

const VideoArea = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {t} = useTranslation('common')
  return (
    <>
      <section className="video-area ptb-100 pb-0">
        <div className="container">
          <div className="video-content">
            <h2>{t('Watch Video.1')}</h2>
          </div>

          <div className="video-box">
            <img src="/images/video-img.jpg" alt="image"/>

            <div className="play-video">
              <div
                onClick={e => {
                  e.preventDefault();
                  setIsOpen(true)
                }}
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
        channel='custom'
        url='/images/gallery/videoatr.mp4'
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}



export default VideoArea;