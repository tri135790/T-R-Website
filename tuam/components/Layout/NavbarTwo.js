import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
import { withTranslation } from 'react-i18next';
import i18n from '../../pages/i18n';
import 'react-dropdown/style.css';
import { Us, Vn } from 'react-flags-select';

class NavbarTwo extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
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
                                {/* <nav style={{ width: '100%', padding: '2rem 0', backgroundColor: 'gray' }}>
                                    <button onClick={() => this.handleClick('en')}>
                                        English
                    </button>
                                    <button onClick={() => this.handleClick('vn')}>
                                        VietNamese
                    </button>
                                </nav> */}
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
                                            <Link href="/#">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
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

                                    {/* <div class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="flag-icon flag-icon-us"> </span> English</a>
                                        <div class="dropdown-menu" aria-labelledby="dropdown09">
                                            <a class="dropdown-item" href="#fr"><span class="flag-icon flag-icon-fr"> </span>  French</a>
                                            <a class="dropdown-item" href="#it"><span class="flag-icon flag-icon-it"> </span>  Italian</a>
                                            <a class="dropdown-item" href="#ru"><span class="flag-icon flag-icon-ru"> </span>  Russian</a>
                                        </div>
                                    </div> */}
                                    <div class="dropdown">
                                        
                                        <button class="btn btn-secondary dropdown-toggle" type="button" onClick={() => this.handleClick('en')} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <Us /> English
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" onClick={() => this.handleClick('vn')}>  <Vn /> Tiếng Việt</a>
                                        </div>
                                    </div>
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
                <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            </React.Fragment>
        );
    }
}

export default withTranslation()(NavbarTwo);