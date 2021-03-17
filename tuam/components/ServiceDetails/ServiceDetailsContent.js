import React, { Component } from 'react';

class ServiceDetailsContent extends Component {
    render() {
        return (
            <>
                <section className="services-details-area ptb-100">
                    <div className="container">
                        <div className="services-details-overview">
                            <div className="services-details-desc">
                                <h3>Coworking</h3>
                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>

                                <div className="features-text">
                                    <h4><i className="flaticon-check-mark"></i> Core Development</h4>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                </div>

                                <div className="features-text">
                                    <h4><i className="flaticon-check-mark"></i> Define Your Choices</h4>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                </div>
                            </div>

                            <div className="services-details-image">
                                <img src="/images/services/single-service1.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="services-details-overview">
                            <div className="services-details-image">
                                <img src="/images/services/single-service2.jpg" alt="image" />
                            </div>

                            <div className="services-details-desc">
                                <h3>Meeting Spaces</h3>
                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>

                                <div className="features-text">
                                    <h4><i className="flaticon-check-mark"></i> Core Development</h4>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                </div>

                                <div className="features-text">
                                    <h4><i className="flaticon-check-mark"></i> Define Your Choices</h4>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ServiceDetailsContent;