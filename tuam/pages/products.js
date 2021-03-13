import React, { Component } from 'react';
import NavbarTwo from '../components/Layout/NavbarTwo';
import PageHeader from '../components/Services/PageHeader';
import NewsCardContent from '../components/News1/NewsCardContent';
import Footer from '../components/Layout/Footer';

class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo useSuspense={false} />
                <PageHeader useSuspense={false} />
                <NewsCardContent useSuspense={false} />
                <Footer useSuspense={false}/>
            </React.Fragment>
        );
    }
}

export default Products;