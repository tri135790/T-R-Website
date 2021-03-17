import React, { Component } from 'react';
import NavbarTwo from '../components/Layout/NavbarTwo';
import PageHeader from '../components/Services/PageHeader';
import NewsCardContent from '../components/News1/NewsCardContent';
import Footer from '../components/Layout/Footer';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

class Products extends Component {
    render() {
        return (
            <>
                <NavbarTwo useSuspense={false} />
                <PageHeader useSuspense={false} />
                <NewsCardContent useSuspense={false} />
                <Footer useSuspense={false}/>
            </>
        );
    }
}

export const getStaticProps = async ({locale}) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Products;