import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Events/PageHeader';
import EventContent from '../components/Events/EventContent';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layout/Footer';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

class Events extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageHeader />
                <EventContent />
                <div className="section-bg-white">
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

export default Events;