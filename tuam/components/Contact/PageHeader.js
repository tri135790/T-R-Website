import React, { Component } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const PageHeader = () => {
    const { t } = useTranslation('common');
        return (
            <>
                <div className="page-title-area item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h2>{t('Contact Us.2')}</h2>
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <a>{t('Home.1')}</a>
                                            </Link>
                                        </li>
                                        <li>{t('Contact Us.2')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

export default PageHeader;