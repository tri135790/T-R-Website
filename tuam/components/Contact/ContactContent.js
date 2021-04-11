import React, { Component } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const ContactContent = () => {
    const { t } = useTranslation('common');
        return (
            <>
                <section className="contact-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="section-title">
                                    <span className="sub-title">{t('Contact Us.1')}</span>
                                    <h2>Say Hello</h2>
                                    <p>{t('Contact Us.3')}</p>
                                </div>

                                <div className="contact-info">
                                    <ul className="contact-list">
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-location"></i>
                                            </div>
                                            <span>{t('Contact Us.3')}</span>
                                            {t('Footer.7')}
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-email"></i>
                                            </div>
                                            <span>Email</span>
                                            t-rgroup@t-r.com.vn <br />
                                            
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone-volume"></i>
                                            </div>
                                            <span>{t('Footer.9')}</span>
                                            +(84) 2873005168 <br />
                                        </li>
                                    </ul>

                                    <ul className="social">
                                        <li>
                                            <Link href="https://www.facebook.com/T-R-Company-Limited-102245858338955">
                                                <a target="_blank"><i className="flaticon-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="flaticon-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="flaticon-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank"><i className="flaticon-instagram"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="section-title">
                                    <span className="sub-title">{t('Contact Us.5')}</span>
                                    <h2>{t('Contact Us.6')}</h2>
                                    <p>{t('Contact Us.3')}</p>
                                </div>

                                <div className="contact-form">
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="name" id="name" className="form-control" required placeholder="Name" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="email" name="email" id="email" className="form-control" required placeholder="Email" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="Subject" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control" id="message" cols="30" rows="6" required placeholder="Your Message"></textarea>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="default-btn">
                                                {t('Contact Us.7')}<span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-map">
                        <img src="/images/bg-map.png" alt="image" />
                    </div>
                </section>
            </>
        );
    }

export default ContactContent;