import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Pricing/PageHeader';
import PriceTable from '../components/Pricing/PriceTable';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layout/Footer';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

class Pricing extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageHeader />
                <PriceTable />

                <div className="gray-bg">
                    <Partner />
                </div>

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

export default Pricing;