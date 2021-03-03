import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/EventDetails/PageHeader';
import EventDetailsContent from '../components/EventDetails/EventDetailsContent';
import Footer from '../components/Layout/Footer';

class EventDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <EventDetailsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default EventDetails;