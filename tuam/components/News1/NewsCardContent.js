import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const NewsCardContent = () => {

  const { t } = useTranslation('common');
  return (
    <>
      <section className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/product-details">
                    <a>
                      <img src="/images/gallery/gallery1.png" alt="image" />
                    </a>
                  </Link>

                  <div className="date">
                    <i >{t('Products.13')}</i>
                  </div>
                </div>

                <div className="post-content">
                  <h3>
                    <Link href="/product-details">
                      <a>{t('Products.3')}</a>
                    </Link>
                  </h3>
                  <p>{t('Products.6')}</p>

                  <Link href="/product-details">
                    <a className="default-btn">{t('Products.14')} <span></span></a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/product-details">
                    <a>
                      <img src="/images/gallery/gallery2.png" alt="image" />
                    </a>
                  </Link>

                  <div className="date">
                    <i>{t('Products.13')}</i> 
                  </div>
                </div>

                <div className="post-content">
                  <h3>
                    <Link href="/product-details">
                      <a>{t('Products.4')}</a>
                    </Link>
                  </h3>
                  <p>{t('Products.7')}</p>

                  <Link href="/product-details">
                    <a className="default-btn">{t('Products.14')} <span></span></a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/product-details">
                    <a>
                      <img src="/images/gallery/gallery3.png" alt="image" />
                    </a>
                  </Link>

                  <div className="date">
                    <i>{t('Products.13')}</i> 
                  </div>
                </div>

                <div className="post-content">
                  <h3>
                    <Link href="/product-details">
                      <a>{t('Products.5')}</a>
                    </Link>
                  </h3>
                  <p>{t('Products.8')}</p>

                  <Link href="/product-details">
                    <a className="default-btn">{t('Products.14')} <span></span></a>
                  </Link>
                </div>
              </div>
            </div>
            {/* Pagination */}
            {/* <div className="col-lg-12 col-md-12">
                                <div className="pagination-area">
                                    <Link href="#">
                                        <a className="prev page-numbers">
                                            <i className="fas fa-angle-double-left"></i>
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="page-numbers">1</a>
                                    </Link>
                                    <span className="page-numbers current" aria-current="page">2</span>
                                    <Link href="#">
                                        <a className="page-numbers">3</a>
                                    </Link>
                                    <Link href="#">
                                        <a className="page-numbers">4</a>
                                    </Link>
                                    <Link href="#">
                                        <a className="next page-numbers">
                                            <i className="fas fa-angle-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div> */}
            {/* End Pagination */}
          </div>
        </div>
      </section>
    </>
  );

}

export default NewsCardContent;