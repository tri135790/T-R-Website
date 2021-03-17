import React, { Component } from 'react';
import Link from 'next/link';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

class Error extends Component {
    render() {
        return (
            <>
                <div className="error-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="error-content">
                                    <img src="/images/404.png" alt="error" />
                                    
                                    <h3>Page Not Found</h3>
                                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

                                    <Link href="/">
                                        <a className="default-btn">
                                            Go to Home <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
})

export default Error;