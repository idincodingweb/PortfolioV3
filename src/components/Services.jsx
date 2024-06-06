import React from 'react';

const ServicesSection = () => {
    return (
        <section className="services spad" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="services__title">
                            <div className="section-title">
                                <span>Layanan Kami</span>
                                <h2>Apa yang Kami Lakukan?</h2>
                            </div>
                            <p>Jika Anda menyewa seorang videographer dari tim kami, Anda akan mendapatkan seorang profesional video untuk membuat video kustom untuk bisnis Anda.</p>
                            <a href="404.EROR" className="primary-btn">Lihat semua layanan</a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            {/* Grafis gerak */}
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="services__item">
                                    <div className="services__item__icon">
                                        <img src="https://e-course-com.vercel.app/assets/img/trick-treat1-img.png" alt="By Idin Code" />
                                    </div>
                                    <h4>React Js</h4>
                                    <p>React Js adalah salah satu library JavaScript yang digunakan untuk membangun antarmuka pengguna yang interaktif dan dinamis.</p>
                                </div>
                            </div>
                            {/* Penulisan naskah dan pengeditan */}
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="services__item">
                                    <div className="services__item__icon">
                                        <img src="https://e-course-com.vercel.app/assets/img/trick-treat2-img.png" alt="By Idin Code" />
                                    </div>
                                    <h4>Angular</h4>
                                    <p>Angular adalah kerangka kerja yang digunakan untuk membangun aplikasi web single-page dan aplikasi web berbasis klien.</p>
                                </div>
                            </div>
                            {/* Distribusi video */}
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="services__item">
                                    <div className="services__item__icon">
                                        <img src="https://e-course-com.vercel.app/assets/img/trick-treat3-img.png" alt="By Idin Code" />
                                    </div>
                                    <h4>Python</h4>
                                    <p>Python adalah bahasa pemrograman yang digunakan dalam berbagai bidang, termasuk pengembangan web, pengembangan perangkat lunak, dan sains data.</p>
                                </div>
                            </div>
                            {/* Hosting video */}
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="services__item">
                                    <div className="services__item__icon">
                                        <img src="https://e-course-com.vercel.app/assets/img/trick-treat4-img.png" alt="By Idin Code" />
                                    </div>
                                    <h4>Java</h4>
                                    <p>Java adalah bahasa pemrograman yang sering digunakan untuk mengembangkan aplikasi perangkat lunak dan situs web.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
