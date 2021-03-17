import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/EventDetails/PageHeader';
import EventDetailsContent from '../components/EventDetails/EventDetailsContent';
import Footer from '../components/Layout/Footer';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

class EventDetails extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageHeader />
                <EventDetailsContent />
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

export default EventDetails;