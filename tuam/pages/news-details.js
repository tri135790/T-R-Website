import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/NewsDetails/PageHeader';
import NewsDetailsContent from '../components/NewsDetails/NewsDetailsContent';
import Footer from '../components/Layout/Footer';

class NewsDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <NewsDetailsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default NewsDetails;