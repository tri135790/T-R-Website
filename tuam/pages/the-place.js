import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/ThePlace/PageHeader';
import FloorPlans from '../components/ThePlace/FloorPlans';
import OurPlace from '../components/ThePlace/OurPlace';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layout/Footer';
 
class ThePlace extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <FloorPlans />
                <OurPlace />
                <Partner />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ThePlace;