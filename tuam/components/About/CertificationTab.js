import React, { Component } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import ISOCertificationSlider from '../About/ISOCertificationSlider';
import FDACertificationSlider from '../About/FDACertificationSlider';
const CertificationTab = () => {

    const { t } = useTranslation('common');
    const openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    return (
        <>
            <div className="container">
                <div className="section-title" id="certification" >
                    <h2 >The Floor Plans</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="tab">
                            <ul className="tabs">
                                <li
                                    className="current"
                                    onClick={(e) => openTabSection(e, 'tab1')}
                                >
                                    {t('ProductDetail.4')}
                                </li>

                                <li onClick={(e) => openTabSection(e, 'tab2')}>
                                    {t('ProductDetail.5')}
                                </li>
                            </ul>

                            <div className="tab_content">
                                <div id="tab1" className="event-details-desc tabs_item">
                                    <ISOCertificationSlider />
                                </div>
                                <div id="tab2" className="comments-area tabs_item">
                                <FDACertificationSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CertificationTab;