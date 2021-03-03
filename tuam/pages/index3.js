import React, { Component } from 'react';
import NavbarTwo from '../components/Layout/NavbarTwo';
import Banner from '../components/HomeThree/Banner';
import WeOfferSlider from '../components/Common/WeOfferSlider';
import WhyChooseUs from '../components/HomeThree/WhyChooseUs';
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
 
class Index3 extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <Banner />
                <WeOfferSlider />
                <WhyChooseUs />
                <VideoArea />
                <OurServices />
                <Partner />
                <Gallery />
                <PriceTable />
                <JoinNow />
                <FeedbackSlider />
                <OurPlace />
                <OurBlog />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index3;