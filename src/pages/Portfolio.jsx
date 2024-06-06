import React, { useState } from 'react';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState("*");

    const handleFilter = (category) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <section className="portfolio spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="portfolio__filter">
                                <li className={selectedCategory === "*" ? "active" : ""} onClick={() => handleFilter("*")}>All</li>
                                <li className={selectedCategory === "branding" ? "active" : ""} onClick={() => handleFilter("branding")}>Branding</li>
                                <li className={selectedCategory === "digital-marketing" ? "active" : ""} onClick={() => handleFilter("digital-marketing")}>Digital marketing</li>
                                <li className={selectedCategory === "web" ? "active" : ""} onClick={() => handleFilter("web")}>Web</li>
                                <li className={selectedCategory === "photography" ? "active" : ""} onClick={() => handleFilter("photography")}>Photography</li>
                                <li className={selectedCategory === "ecommerce" ? "active" : ""} onClick={() => handleFilter("ecommerce")}>eCommerce</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio__gallery">
                        {portfolioItems.filter(item => selectedCategory === "*" ? true : item.category === selectedCategory).map((item, index) => (
                            <div className={`col-lg-4 col-md-6 col-sm-6 mix ${item.category}`} key={index}>
                                <div className="portfolio__item">
                                    <div className="portfolio__item__video set-bg" style={{ backgroundImage: `url(${item.image})` }}>
                                        <a href={item.videoLink} className="play-btn video-popup">
                                            <FontAwesomeIcon icon={faPlay} />
                                        </a>
                                    </div>
                                    <div className="portfolio__item__text">
                                        <h4>{item.title}</h4>
                                        {Array.isArray(item.tags) ? (
                                            <ul>
                                                {item.tags.map((tag, idx) => <li key={idx}>{tag}</li>)}
                                            </ul>
                                        ) : (
                                            <span>{item.tags}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

// Data untuk portofolio
const portfolioItems = [
    {
        category: 'branding',
        image: 'https://images.pexels.com/photos/758744/pexels-photo-758744.jpeg',
        videoLink: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
        title: 'VIP Auto Tires & Service',
        tags: ['eCommerce', 'Magento'],
    },
    {
        category: 'digital-marketing',
        image: 'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg',
        videoLink: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
        title: 'VIP Auto Tires & Service',
        tags: 'Photography',
    },
    {
        category: 'web',
        image: 'https://images.pexels.com/photos/705075/pexels-photo-705075.jpeg',
        videoLink: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
        title: 'VIP Auto Tires & Service',
        tags: 'Web Design',
    },
    {
        category: 'photography',
        image: 'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg',
        videoLink: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
        title: 'VIP Auto Tires & Service',
        tags: 'Photography',
    },
    {
        category: 'ecommerce',
        image: 'https://images.pexels.com/photos/71104/utah-mountain-biking-bike-biking-71104.jpeg',
        videoLink: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
        title: 'VIP Auto Tires & Service',
        tags: 'eCommerce',
    },
];

export default Portfolio;
