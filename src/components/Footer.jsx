import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faDribbble, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="footer__top__logo">
                                <p className="fw-bold text-white">
                                  Idin Code
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="footer__top__social">
                                <a href="404.html"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="404.html"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="404.html"><FontAwesomeIcon icon={faDribbble} /></a>
                                <a href="404.html"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="404.html"><FontAwesomeIcon icon={faYoutube} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__option">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="footer__option__item">
                                <h5>Tentang Kami</h5>
                                <p>Dibentuk pada tahun 2024 oleh Idin Iskandar, Kami adalah perusahaan produksi penuh layanan yang berpengalaman dalam pembuatan portofolio web dan pengembangan aplikasi.</p>
                                <a href="404.html" className="read__more">Baca lebih lanjut <span className="arrow_right"></span></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-3">
                            <div className="footer__option__item">
                                <h5>Siapa Kami</h5>
                                <ul>
                                    <li><a href="404.html">Tim</a></li>
                                    <li><a href="404.html">Karir</a></li>
                                    <li><a href="404.html">Hubungi Kami</a></li>
                                    <li><a href="404.html">Lokasi</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-3">
                            <div className="footer__option__item">
                                <h5>Karya Kami</h5>
                                <ul>
                                    <li><a href="404.html">Fitur</a></li>
                                    <li><a href="404.html">Terbaru</a></li>
                                    <li><a href="404.html">Arsip</a></li>
                                    <li><a href="404.html">Video untuk Web</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="footer__option__item">
                                <h5>Berlangganan</h5>
                                <p>Kami menawarkan berita terbaru seputar teknologi web dan pengembangan aplikasi.</p>
                                <form action="404.html">
                                    <input type="text" placeholder="Email" />
                                    <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p className="footer__copyright__text">
                                Hak Cipta &copy; 2024 Idin Iskandar
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
