import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <>
                <div className="banner-section item-bg4">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content">
                                    <h1>Professional, Creative, Scalable Workspace Solutions</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

                                    <form>
                                        <div className="form-group mb-0">
                                            <input type="text" className="input-location" placeholder="Enter Location" />
                                            <i className="flaticon-location"></i>
                                        </div>
                                        <button className="default-btn">
                                            Search Now <i className="fas fa-search"></i><span></span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Banner;