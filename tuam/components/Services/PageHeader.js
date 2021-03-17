import React from 'react';
import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

const PageHeader = () => {
  const {t} = useTranslation('common');
  return (
    <>
      <div className="page-title-area item-bg1">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>{t('Products.1')}</h2>
                <ul>
                  <li>
                    <Link href="/">
                      <a>{t('Home.1')}</a>
                    </Link>
                  </li>
                  <li>{t('Products.1')}</li>
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