import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/About/PageHeader';
import AboutText from '../components/About/AboutText';
import ServicesSlider from '../components/Common/ServicesSlider';
import OurMission from '../components/Common/OurMission';
import OurTeamSlider from '../components/Common/OurTeamSlider';
import JoinNow from '../components/Common/JoinNow';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layout/Footer';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <AboutText />
                <ServicesSlider />
                <OurMission />
                <OurTeamSlider />
                <JoinNow />
                <FeedbackSlider />
                <Partner />
                <Footer />
            </React.Fragment>
        );
    }
}

export default About;