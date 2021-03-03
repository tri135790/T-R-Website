import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/ServiceDetails/PageHeader';
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import Footer from '../components/Layout/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <ServiceDetailsContent />

                <div className="gray-bg">
                    <FeedbackSlider />
                </div>
                
                <Footer /> 
            </React.Fragment>
        );
    }
}

export default ServiceDetails;