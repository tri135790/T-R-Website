import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/News1/PageHeader';
import NewsCardContent from '../components/News1/NewsCardContent';
import Footer from '../components/Layout/Footer';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

class News1 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageHeader />
                <NewsCardContent />
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

export default News1;