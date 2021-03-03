import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Team/PageHeader';
import TeamContent from '../components/Team/TeamContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import Footer from '../components/Layout/Footer';

class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <TeamContent />

                <div className="gray-bg">
                    <FeedbackSlider />
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default Team;