import React, { Component, useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Colors from './Colors';
import DetailsThumb from './DetailsThumb';

const ProductDetailsContent = () => {
    const { t } = useTranslation('common');
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Medical Mask",
            "src": [
                "/images/gallery/7.png",
                "/images/gallery/9.png",
                "/images/gallery/11.png",
                "/images/gallery/13.png",
            ],
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["#7CB9E8", "#2E5894", "	#F5F5DC"],
            "count": 1
        }
    ]);
    const [index, setIndex] = useState(0);

    const myRef = React.createRef();

    const handleTab = index => {
        setIndex(index);
        const images = myRef.current.children;
        for (let i = 0; i < images.length; i++) {
            images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    }

    useEffect(() => {
        myRef.current.children[index].className = "active";
    }, []);

    return (
        <>
            <section className="event-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="event-details">
                            <div className="event-details-header">
                                <Link href="/products">
                                    <a className="back-all-event">
                                        <i className="flaticon-left-chevron"></i> {t('ProductDetail.2')}
                                            </a>
                                </Link>
                            </div>

                            <div className="product-detail">
                                {
                                    products.map(item => (
                                        <div className="details" key={item._id}>
                                            <div className="big-img">
                                                <img src={item.src[index]} alt="" />
                                            </div>

                                            <div className="box">
                                                <div className="row">
                                                    <h2>{t('Products.5')}</h2>
                                                </div>
                                                <Colors colors={item.colors} />

                                                {/* <h5>{item.description}</h5> */}
                                                <p>{t('ProductDetail.3')}</p>

                                                <DetailsThumb images={item.src} tab={handleTab} myRef={myRef} />

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                          
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductDetailsContent;