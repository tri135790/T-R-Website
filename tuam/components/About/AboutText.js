import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';

class AboutText extends Component {
    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-title">
                                    <span>{t('About Us.1')}</span>
                                    <h2>{t('About Us.2')}</h2>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-text">
                                    <p>{t('About Us.3')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default withNamespaces()(AboutText);