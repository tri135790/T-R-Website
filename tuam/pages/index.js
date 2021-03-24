import React, { Component } from 'react';
import NavbarTwo from '../components/Layout/NavbarTwo';
import Banner from '../components/HomeTwo/Banner';
import WeOfferSlider from '../components/Common/WeOfferSlider';
import AboutUs from '../components/HomeTwo/AboutUs';
import VideoArea from '../components/Common/VideoArea';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layout/Footer';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

class Index extends Component {
    render() {
        return (
                <>
                    <NavbarTwo useSuspense={false} />
                    <Banner useSuspense={false} />
                    <AboutUs useSuspense={false} />
                    <WeOfferSlider useSuspense={false} />
                    <VideoArea useSuspense={false} />
                    <Partner useSuspense={false} />
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

export default Index;