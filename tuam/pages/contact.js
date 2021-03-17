import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Contact/PageHeader';
import ContactContent from '../components/Contact/ContactContent';
import Footer from '../components/Layout/Footer';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageHeader />
                <ContactContent />
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

export default Contact;