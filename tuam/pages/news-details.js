import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/NewsDetails/PageHeader';
import NewsDetailsContent from '../components/NewsDetails/NewsDetailsContent';
import Footer from '../components/Layout/Footer';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

class NewsDetails extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageHeader />
                <NewsDetailsContent />
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

export default NewsDetails;