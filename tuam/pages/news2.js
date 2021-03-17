import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/News2/PageHeader';
import NewsCardContent from '../components/News2/NewsCardContent';
import NewsSideBar from '../components/News2/NewsSideBar';
import Footer from '../components/Layout/Footer';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

class News2 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageHeader />

                {/* Blog Area */}
                <div className="blog-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <NewsCardContent />
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <NewsSideBar />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Blog Area */}

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

export default News2;