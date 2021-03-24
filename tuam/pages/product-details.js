import React, { Component } from 'react';
import NavbarTwo from '../components/Layout/NavbarTwo';
import PageHeader from '../components/ProductDetails/PageHeader';
import ProductDetailsContent from '../components/ProductDetails/ProductDetailsContent';
import Footer from '../components/Layout/Footer';
import ProductTab from '../components/ProductDetails/ProductTab';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import OtherProducts from '../components/ProductDetails/OtherProducts';

class ProductDetails extends Component {
  render() {
    return (
      <>
        <NavbarTwo useSuspense={false} />
        <PageHeader useSuspense={false} />
        <ProductDetailsContent useSuspense={false} />
        <ProductTab useSuspense={false} />
        <OtherProducts useSuspense={false} />
        <Footer useSuspense={false} />
      </>
    );
  }
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default ProductDetails;