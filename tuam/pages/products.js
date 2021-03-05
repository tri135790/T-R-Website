import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Services/PageHeader';
import ServicesContent from '../components/Services/ServicesContent';
import Footer from '../components/Layout/Footer';

class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <ServicesContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Products;