import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
// import { withTranslation } from 'react-i18next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
      items: 3,
    },
    768: {
      items: 3,
    },
    1200: {
      items: 3,
    }
  }
}

const OtherProducts = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <section className="partner-area ptb-100 bg-f8f8f8 other-product-area">
        <div className="container">
          <div className="partner-title other-product">
            <h2>{t('ProductDetail.6')}</h2>
          </div>

          {typeof window !== 'undefined' && <OwlCarousel
            className="partner-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="single-blog-post">
              <div className="post-image">
                <Link href="/product-details">
                  <a>
                    <img src="/images/gallery/gallery1.png" alt="image" />
                  </a>
                </Link>

                <div className="date">
                  <i >{t('Products.13')}</i>
                </div>
              </div>

              <div className="post-content">
                <h3>
                  <Link href="/product-details">
                    <a>{t('Products.3')}</a>
                  </Link>
                </h3>
              </div>
            </div>

            <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/product-details">
                    <a>
                      <img src="/images/gallery/gallery2.png" alt="image" />
                    </a>
                  </Link>

                  <div className="date">
                    <i>{t('Products.13')}</i> 
                  </div>
                </div>

                <div className="post-content">
                  <h3>
                    <Link href="/product-details">
                      <a>{t('Products.4')}</a>
                    </Link>
                  </h3>
                  </div>
              </div>

              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/product-details">
                    <a>
                      <img src="/images/gallery/gallery3.png" alt="image" />
                    </a>
                  </Link>

                  <div className="date">
                    <i>{t('Products.13')}</i> 
                  </div>
                </div>

                <div className="post-content">
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



export default OtherProducts;