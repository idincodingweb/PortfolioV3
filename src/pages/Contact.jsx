import React from 'react';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const contactDetails = [
        {
            icon: faMapMarker,
            title: 'Address',
            text: 'DKI Jakarta, 13451'
        },
        {
            icon: faPhone,
            title: 'Hotline',
            text: '+628313452678 • +628313453878'
        },
        {
            icon: faEnvelope,
            title: 'Email',
            text: 'idincode@gmail.com'
        }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic to handle form submission
        console.log("Form submitted!");
    };

    return (
        <>
            <section className="contact-widget spad">
                <div className="container">
                    <div className="row">
                        {contactDetails.map((detail, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="contact__widget__item">
                                    <div className="contact__widget__item__icon">
                                        <FontAwesomeIcon icon={detail.icon} />
                                    </div>
                                    <div className="contact__widget__item__text">
                                        <h4>{detail.title}</h4>
                                        <p>{detail.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="contact-form spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <form onSubmit={handleSubmit} className="contact__form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Your name" required />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="email" placeholder="Your email" required />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea placeholder="Your message" required></textarea>
                                        <button type="submit" className="site-btn">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;
