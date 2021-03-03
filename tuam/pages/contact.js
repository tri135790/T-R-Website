import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Contact/PageHeader';
import ContactContent from '../components/Contact/ContactContent';
import Footer from '../components/Layout/Footer';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <ContactContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;