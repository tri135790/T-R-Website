import React from 'react';
import Link from 'next/link';
// import { withTranslation } from 'react-i18next';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

const AboutUs = () => {
  const {t} = useTranslation('common');
  return (
    <>
      <section className="about-section ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <div className="img1">
                  <img src="/images/about/about1.jpg" alt="image"/>
                </div>

                <div className="img2">
                  <img src="/images/about/about2.jpg" alt="image"/>
                </div>

                <div className="img3">
                  <img src="/images/about/about3.jpg" alt="image"/>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">{t('About Us.1')}</span>
                <h2>{t('Subtitle About Us 1.1')}</h2>
                <p>{t('Subtitle About Us 2.1')}</p>
                <Link href="/about#certification">
                  <a className="read-more-btn">
                    {t('See our ISO & FDA Certifications.1')} <i className="flaticon-next"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}



export default AboutUs;