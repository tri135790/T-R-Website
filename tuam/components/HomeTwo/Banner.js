import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/css/modal-video.min.css';
import dynamic from 'next/dynamic';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

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

const Banner = () => {
  const {isOpen, setIsOpen} = useState(false)
  const {t} = useTranslation('common');
  return (
    <>
      <div className="home-section">
        {typeof window !== 'undefined' && <OwlCarousel
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
        </OwlCarousel>}
      </div>
      <ModalVideo
        channel='youtube'
        isOpen={isOpen}
        videoId='szuchBiLrEM'
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}



export default Banner;