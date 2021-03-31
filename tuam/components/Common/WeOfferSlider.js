import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
// import { withTranslation } from 'react-i18next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

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


const WeOfferSlider = () => {
  const {t} = useTranslation('common');
  return (
    <>
      <section className="services-area ptb-100 bg-f8f8f8">
        <div className="container">
          <div className="section-title">
            <h2>{t('Products.2')}</h2>
          </div>

          {typeof window !== 'undefined' && <OwlCarousel
            className="main-services-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="services-box">
              <img src="/images/gallery/gallery1.png" alt="image"/>

              <div className="services-content">
                <h3>
                  <Link href="/product-details">
                    <a>{t('Products.3')}</a>
                  </Link>
                </h3>
              </div>
            </div>

            <div className="services-box">
              <img src="/images/gallery/gallery2.png" alt="image"/>

              <div className="services-content">
                <h3>
                  <Link href="/product-details">
                    <a>{t('Products.4')}</a>
                  </Link>
                </h3>
              </div>
            </div>

            <div className="services-box">
              <img src="/images/gallery/gallery3.png" alt="image"/>

              <div className="services-content">
                <h3>
                  <Link href="/product-details">
                    <a>{t('Products.5')}</a>
                  </Link>
                </h3>
              </div>
            </div>
          </OwlCarousel>}
        </div>
      </section>
    </>
  );
}



export default WeOfferSlider;