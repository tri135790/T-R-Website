import React, { Component } from 'react';
import Link from 'next/link';

class FloorPlans extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <React.Fragment>
                <section className="floor-plans-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>The Floor Plans</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="tab">
                                    <ul className="tabs">
                                        <li
                                            className="current"
                                            onClick={(e) => this.openTabSection(e, 'tab1')}
                                        >
                                            Floor 1
                                        </li>
                                        
                                        <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                            Floor 2
                                        </li>

                                        <li onClick={(e) => this.openTabSection(e, 'tab3')}>
                                            Floor 3
                                        </li>

                                        <li onClick={(e) => this.openTabSection(e, 'tab4')}>
                                            Floor 4
                                        </li>

                                        <li onClick={(e) => this.openTabSection(e, 'tab5')}>
                                            Floor 5
                                        </li>
                                    </ul>

                                    <div className="tab_content">
                                        <div id="tab1" className="tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 col-md-12 content">
                                                    <div className="tabs_item_content">
                                                        <h3>Floor 1</h3>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>

                                                        <ul className="features-list">
                                                            <li>Floor No <span>1</span></li>
                                                            <li>Rooms <span>4</span></li>
                                                            <li>Total Area <span>311.50 sqft</span></li>
                                                            <li>Bathroom <span>Yes</span></li>
                                                            <li>Windows <span>4</span></li>
                                                        </ul>

                                                        <Link href="#">
                                                            <a className="default-btn">
                                                                Schedule a Visit <span></span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-12 image">
                                                    <div className="tabs_item_image">
                                                        <img src="/images/floor-img1.png" alt="image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="tab2" className="tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 col-md-12 image">
                                                    <div className="tabs_item_image">
                                                        <img src="/images/floor-img2.png" alt="image" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-12 content">
                                                    <div className="tabs_item_content">
                                                        <h3>Floor 2</h3>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>

                                                        <ul className="features-list">
                                                            <li>Floor No <span>2</span></li>
                                                            <li>Rooms <span>4</span></li>
                                                            <li>Total Area <span>311.50 sqft</span></li>
                                                            <li>Bathroom <span>Yes</span></li>
                                                            <li>Windows <span>4</span></li>
                                                        </ul>

                                                        <Link href="#">
                                                            <a className="default-btn">
                                                                Schedule a Visit <span></span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="tab3" className="tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 col-md-12 content">
                                                    <div className="tabs_item_content">
                                                        <h3>Floor 3</h3>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>

                                                        <ul className="features-list">
                                                            <li>Floor No <span>3</span></li>
                                                            <li>Rooms <span>4</span></li>
                                                            <li>Total Area <span>311.50 sqft</span></li>
                                                            <li>Bathroom <span>Yes</span></li>
                                                            <li>Windows <span>4</span></li>
                                                        </ul>

                                                        <Link href="#">
                                                            <a className="default-btn">
                                                                Schedule a Visit <span></span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-12 image">
                                                    <div className="tabs_item_image">
                                                        <img src="/images/floor-img3.png" alt="image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="tab4" className="tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 col-md-12 image">
                                                    <div className="tabs_item_image">
                                                        <img src="/images/floor-img4.png" alt="image" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-12 content">
                                                    <div className="tabs_item_content">
                                                        <h3>Floor 4</h3>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>

                                                        <ul className="features-list">
                                                            <li>Floor No <span>4</span></li>
                                                            <li>Rooms <span>4</span></li>
                                                            <li>Total Area <span>311.50 sqft</span></li>
                                                            <li>Bathroom <span>Yes</span></li>
                                                            <li>Windows <span>4</span></li>
                                                        </ul>

                                                        <Link href="#">
                                                            <a className="default-btn">
                                                                Schedule a Visit <span></span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="tab5" className="tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 col-md-12 content">
                                                    <div className="tabs_item_content">
                                                        <h3>Floor 5</h3>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>

                                                        <ul className="features-list">
                                                            <li>Floor No <span>5</span></li>
                                                            <li>Rooms <span>4</span></li>
                                                            <li>Total Area <span>311.50 sqft</span></li>
                                                            <li>Bathroom <span>Yes</span></li>
                                                            <li>Windows <span>4</span></li>
                                                        </ul>

                                                        <Link href="#">
                                                            <a className="default-btn">
                                                                Schedule a Visit <span></span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-12 image">
                                                    <div className="tabs_item_image">
                                                        <img src="/images/floor-img5.png" alt="image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default FloorPlans;