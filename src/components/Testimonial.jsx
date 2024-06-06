import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const Testimonial = () => {
    const testimonials = [
        {
            text: 'Menyediakan layanan yang luar biasa dan dapat bermanfaat bagi berbagai jenis industri.',
            img: 'img/testimonial/ta-1.jpg',
            name: 'Krista Attorn',
            title: 'Desainer Web'
        },
        {
            text: 'Layanan yang diberikan sangat memuaskan dan bermanfaat bagi banyak orang.',
            img: 'img/testimonial/ta-2.jpg',
            name: 'John Doe',
            title: 'Pengembang Web'
        },
        {
            text: 'Layanan yang diberikan sangat profesional dan memenuhi harapan saya.',
            img: 'img/testimonial/ta-3.jpg',
            name: 'Jane Smith',
            title: 'Manajer Proyek'
        }
    ];

    return (
        <section className="testimonial spad set-bg" style={{ backgroundImage: `url('img/testimonial-bg.jpg')` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title center-title">
                            <span>Disukai Oleh Klien</span>
                            <h2>Apa Kata Klien?</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <OwlCarousel className="testimonial__slider owl-carousel" items={3} loop margin={10} nav>
                        {testimonials.map((testimonial, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="testimonial__item">
                                    <div className="testimonial__text">
                                        <p>{testimonial.text}</p>
                                    </div>
                                    <div className="testimonial__author">
                                        <div className="testimonial__author__pic">
                                            <img src={testimonial.img} alt={testimonial.name}/>
                                        </div>
                                        <div className="testimonial__author__text">
                                            <h5>{testimonial.name}</h5>
                                            <span>{testimonial.title}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
