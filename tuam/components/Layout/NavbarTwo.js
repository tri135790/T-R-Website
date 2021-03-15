import React, { Component, useState  } from 'react';
import Link from '../../utils/ActiveLink';
import { withTranslation } from 'react-i18next';
import i18n from '../../pages/i18n';
import 'react-dropdown/style.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

class NavbarTwo extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true,
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    handleClick(lang) {
        i18n.changeLanguage(lang);
    }


    render() {

        const { t } = this.props;
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <React.Fragment>

                <div id="navbar" className="navbar-area navbar-style-two">
                    <div className="tuam-nav">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src="/images/white-logo.png" alt="logo" className="white-logo" />

                                        {/* For mobile device */}
                                        <img src="/images/logo.png" alt="logo" className="logo" />
                                    </a>
                                </Link>
                                <ButtonGroup id="language-button-mobile"  size="sm">
                                        <Button variant="warning" className="language-button" active={i18n.language === 'vn'} onClick={() => this.handleClick('vn')}>VIE</Button>
                                        <Button variant="warning"  className="language-button" active={i18n.language === 'en'} onClick={() => this.handleClick('en')}>ENG</Button>
                                    </ButtonGroup>
                                <button
                                    onClick={this.toggleNavbar}
                                    className={classTwo}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>
                
                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link href="/" activeClassName="active">
                                                <a className="nav-link" >
                                                    {t('Home.1')}
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/about" activeClassName="active">
                                                <a className="nav-link">{t('About Us.1')}</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/products" activeClassName="active">
                                                <a className="nav-link">{t('Products.1')}</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/contact" activeClassName="active">
                                                <a className="nav-link">{t('Contact Us.1')}</a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ButtonGroup id="language-button-desktop"  size="sm">
                                        <Button variant="warning" className="language-button" active={i18n.language === 'vn'} onClick={() => this.handleClick('vn')}>VIE</Button>
                                        <Button variant="warning"  className="language-button" active={i18n.language === 'en'} onClick={() => this.handleClick('en')}>ENG</Button>
                                    </ButtonGroup>
                                    <div className="others-option">
                                        <div className="call-us">
                                            <div className="icon">
                                                <i className="flaticon-call"></i>
                                            </div>
                                            {t('Call Us.1')}
                                            <span className="number">+1 518 285679</span>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withTranslation()(NavbarTwo);