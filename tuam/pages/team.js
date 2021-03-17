import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Team/PageHeader';
import TeamContent from '../components/Team/TeamContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import Footer from '../components/Layout/Footer';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

class Team extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageHeader />
                <TeamContent />

                <div className="gray-bg">
                    <FeedbackSlider />
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

export default Team;