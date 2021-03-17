import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/ThePlace/PageHeader';
import FloorPlans from '../components/ThePlace/FloorPlans';
import OurPlace from '../components/ThePlace/OurPlace';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layout/Footer';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
 
class ThePlace extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageHeader />
                <FloorPlans />
                <OurPlace />
                <Partner />
                <Footer />
            </>
        );
    }
}

export const getStaticProps = async ({locale}) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default ThePlace;