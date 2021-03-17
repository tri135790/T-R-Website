import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/ServiceDetails/PageHeader';
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import Footer from '../components/Layout/Footer';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageHeader />
                <ServiceDetailsContent />

                <div className="gray-bg">
                    <FeedbackSlider />
                </div>
                
                <Footer /> 
            </>
        );
    }
}

export const getStaticProps = async ({locale}) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default ServiceDetails;