import React, { useEffect, useState } from 'react';
import Link from '../../utils/ActiveLink';
import 'react-dropdown/style.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { useTranslation } from 'next-i18next';

const NavbarTwo = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapsed = () => {
    setCollapsed(collapsed => !collapsed)
  }

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }, [])


  const { t, i18n } = useTranslation('common')
  const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
  return (
    <>
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
              <ButtonGroup id="language-button-mobile" size="sm">
                <Button variant="warning" className="language-button" active={() => i18n.language === 'vn'}
                  onClick={() => window.location = '/vn'}>VIE</Button>
                <Button variant="warning" className="language-button" active={() => i18n.language === 'en'}
                  onClick={() => window.location = '/en'}>ENG</Button>
              </ButtonGroup>
              <button
                onClick={handleCollapsed}
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
                      <a className="nav-link">
                        {t('Home.1')}
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about" activeClassName="active">
                      <a className="nav-link">{t('About Us.1')} </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/#" >
                      <a className="nav-link">{t('Trading.1')} <i className="flaticon-down-arrow"></i></a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/products" activeClassName="active">
                          <a className="nav-link">{t('Trading.2')}</a>
                        </Link>
                      </li>

                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">{t('Contact Us.1')}</a>
                    </Link>
                  </li>
                </ul>
                <ButtonGroup id="language-button-desktop" size="sm">
                  <Button variant="warning" className="language-button" active={i18n.language === 'vn'}
                    onClick={() => window.location = '/vn'}>VIE</Button>
                  <Button variant="warning" className="language-button" active={i18n.language === 'en'}
                    onClick={() => window.location = '/en'}>ENG</Button>
                </ButtonGroup>
                <div className="others-option">
                  <div className="call-us">
                    <div className="icon">
                      <i className="flaticon-call"></i>
                    </div>
                    {t('Call Us.1')}
                    <span className="number">+(84) 2873005168</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );

}

export default NavbarTwo;