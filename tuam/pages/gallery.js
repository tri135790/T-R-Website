import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Gallery/PageHeader';
import GalleryContent from '../components/Gallery/GalleryContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import Footer from '../components/Layout/Footer';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

class Gallery extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageHeader />
                <GalleryContent />
                <FeedbackSlider />
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

export default Gallery;