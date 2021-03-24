import React, { Component } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const ProductTab = () => {

    const { t } = useTranslation('common');
    const openTabSection = (evt, tabNmae) => {
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

        return (
            <>
                {/* <section className="floor-plans-area ptb-100"> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="tab">
                                <ul className="tabs">
                                    <li
                                        className="current"
                                        onClick={(e) => openTabSection(e, 'tab1')}
                                    >
                                       {t('ProductDetail.4')}
                                        </li>

                                    <li onClick={(e) => openTabSection(e, 'tab2')}>
                                    {t('ProductDetail.5')}
                                        </li>
                                </ul>

                                <div className="tab_content">
                                    <div id="tab1" className="event-details-desc tabs_item">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                        <blockquote className="wp-block-quote">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            <cite>Tom Cruise</cite>
                                        </blockquote>

                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) making it look like readable English.</p>
                                    </div>
                                    <div id="tab2" className="comments-area tabs_item">
                                        <h3 className="comments-title">2 Comments:</h3>

                                        <ol className="comment-list">
                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src="/images/author1.jpg" className="avatar" alt="image" />
                                                            <b className="fn">John Jones</b>
                                                            <span className="says">says:</span>
                                                        </div>

                                                        <div className="comment-metadata">
                                                            <Link href="#">
                                                                <a>
                                                                    <time>April 24, 2019 at 10:59 am</time>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </footer>

                                                    <div className="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                    </div>

                                                    <div className="reply">
                                                        <Link href="#">
                                                            <a className="comment-reply-link">Reply</a>
                                                        </Link>
                                                    </div>
                                                </article>

                                                <ol className="children">
                                                    <ol className="children">
                                                        <li className="comment">
                                                            <article className="comment-body">
                                                                <footer className="comment-meta">
                                                                    <div className="comment-author vcard">
                                                                        <img src="/images/author3.jpg" className="avatar" alt="image" />
                                                                        <b className="fn">Sarah Taylor</b>
                                                                        <span className="says">says:</span>
                                                                    </div>

                                                                    <div className="comment-metadata">
                                                                        <Link href="#">
                                                                            <a>
                                                                                <time>April 24, 2019 at 10:59 am</time>
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                </footer>

                                                                <div className="comment-content">
                                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>

                                                                <div className="reply">
                                                                    <Link href="#">
                                                                        <a className="comment-reply-link">Reply</a>
                                                                    </Link>
                                                                </div>
                                                            </article>
                                                        </li>
                                                    </ol>
                                                </ol>
                                            </li>

                                            <li className="comment">
                                                <ol className="children">
                                                    <li className="comment">
                                                        <article className="comment-body">
                                                            <footer className="comment-meta">
                                                                <div className="comment-author vcard">
                                                                    <img src="/images/author1.jpg" className="avatar" alt="image" />
                                                                    <b className="fn">James Anderson</b>
                                                                    <span className="says">says:</span>
                                                                </div>

                                                                <div className="comment-metadata">
                                                                    <Link href="#">
                                                                        <a>
                                                                            <time>April 24, 2019 at 10:59 am</time>
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                            </footer>

                                                            <div className="comment-content">
                                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                            </div>

                                                            <div className="reply">
                                                                <Link href="#">
                                                                    <a className="comment-reply-link">Reply</a>
                                                                </Link>
                                                            </div>
                                                        </article>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>

                                        <div className="comment-respond">
                                            <h3 className="comment-reply-title">Leave a Reply</h3>

                                            <form className="comment-form">
                                                <p className="comment-notes">
                                                    <span id="email-notes">Your email address will not be published.</span>
                                                    Required fields are marked
                                                    <span className="required">*</span>
                                                </p>
                                                <p className="comment-form-comment">
                                                    <label>Comment</label>
                                                    <textarea name="comment" id="comment" rows="5"></textarea>
                                                </p>
                                                <p className="comment-form-author">
                                                    <label>Name <span className="required">*</span></label>
                                                    <input type="text" id="author" name="author" />
                                                </p>
                                                <p className="comment-form-email">
                                                    <label>Email <span className="required">*</span></label>
                                                    <input type="email" id="email" name="email" />
                                                </p>
                                                <p className="comment-form-url">
                                                    <label>Website</label>
                                                    <input type="url" id="url" name="url" />
                                                </p>
                                                <p className="comment-form-cookies-consent">
                                                    <input type="checkbox" value="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent" />

                                                    <label>
                                                        Save my name, email, and website in this browser for the next time I comment.
                                                    </label>
                                                </p>
                                                <p className="form-submit">
                                                    <input type="submit" name="submit" id="submit" className="submit" value="Post a Comment" />
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </section> */}
            </>
        );
    }

export default ProductTab;