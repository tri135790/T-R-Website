import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Contact/PageHeader';
import ContactContent from '../components/Contact/ContactContent';
import Footer from '../components/Layout/Footer';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import NavbarTwo from '../components/Layout/NavbarTwo';

class Contact extends Component {
    render() {
        return (
            <>
                <NavbarTwo useSuspense={false} />
                <PageHeader useSuspense={false} />
                <ContactContent useSuspense={false} />
                <Footer useSuspense={false} />
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