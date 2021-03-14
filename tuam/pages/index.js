import React, { Component } from 'react';
import NavbarTwo from '../components/Layout/NavbarTwo';
import Banner from '../components/HomeTwo/Banner';
import WeOfferSlider from '../components/Common/WeOfferSlider';
import AboutUs from '../components/HomeTwo/AboutUs';
import VideoArea from '../components/Common/VideoArea';
import OurServices from '../components/Common/OurServices';
import Partner from '../components/Common/Partner';
import Gallery from '../components/Common/Gallery';
import PriceTable from '../components/Pricing/PriceTable';
import JoinNow from '../components/Common/JoinNow';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import OurPlace from '../components/Common/OurPlace';
import OurBlog from '../components/Common/OurBlog';
import Footer from '../components/Layout/Footer';

class Index extends Component {
    render() {
        return (
                <React.Fragment>
                    <NavbarTwo useSuspense={false} />
                    <Banner useSuspense={false} />
                    <AboutUs useSuspense={false} />
                    <WeOfferSlider useSuspense={false} />
                    <VideoArea useSuspense={false} />
                    <Partner useSuspense={false} />
                    <Footer useSuspense={false} />
                </React.Fragment>

        );
    }
}

export default Index;