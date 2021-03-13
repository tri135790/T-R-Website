import React, { Component } from 'react';
import NavbarTwo from '../components/Layout/NavbarTwo';
// import Navbar from '../components/Layout/Navbar';
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
                <NavbarTwo useSuspense={false} />
                <PageHeader useSuspense={false} />
                <AboutText useSuspense={false} />
                <ServicesSlider useSuspense={false} />
                <OurMission useSuspense={false} />
                <OurTeamSlider useSuspense={false} />
                <JoinNow useSuspense={false} />
                <FeedbackSlider useSuspense={false} />
                <Partner useSuspense={false} />
                <Footer useSuspense={false} />
            </React.Fragment>
        );
    }
}

export default About;