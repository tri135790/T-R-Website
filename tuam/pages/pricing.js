import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Pricing/PageHeader';
import PriceTable from '../components/Pricing/PriceTable';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layout/Footer';

class Pricing extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader />
                <PriceTable />

                <div className="gray-bg">
                    <Partner />
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default Pricing;