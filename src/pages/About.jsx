import React from 'react'
import Team from '../components/Team';
import Footer from '../components/Footer';

const About = () => {
    return (
      <div>
        <section className="about spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about__pic">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="about__pic__item about__pic__item--large set-bg"
                                         style={{ backgroundImage: `url('https://landingpage-idincode-larareacts-projects.vercel.app/img/idinganteng.png')` }}></div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="about__pic__item set-bg"
                                                 style={{ backgroundImage: `url('img/about/about-2.jpg')` }}></div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="about__pic__item set-bg"
                                                 style={{ backgroundImage: `url('img/about/about-3.jpg')` }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__text">
                            <div className="section-title">
                                <span>Tentang Saya</span>
                                <h2>Siapa Saya?</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="services__item">
                                        <div className="services__item__icon">
                                            <img src="https://e-course-com.vercel.app/assets/img/category1-img.png" alt=""/>
                                        </div>
                                        <h4>Pengembangan Web</h4>
                                        <p>Saya membangun dan mengembangkan website yang responsif dan fungsional.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="services__item">
                                        <div className="services__item__icon">
                                            <img src="https://e-course-com.vercel.app/assets/img/category2-img.png" alt=""/>
                                        </div>
                                        <h4>Desain UI/UX</h4>
                                        <p>Saya merancang antarmuka pengguna yang menarik dan pengalaman pengguna yang optimal.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="about__text__desc">
                                <p>Nama saya Idin Iskandar, seorang pengembang web dengan pengalaman lebih dari 10 tahun dalam industri ini. Saya berfokus pada pengembangan web, desain UI/UX, dan solusi digital untuk klien dari berbagai sektor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <Team />
        </section>
       <Footer />
     </div>
    );
};

export default About;