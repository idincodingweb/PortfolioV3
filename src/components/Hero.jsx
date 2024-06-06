import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

class HeroSection extends React.Component {
  componentDidMount() {
    window.$(".hero__slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1
    });
  }

  render() {
    return (
      <section className="hero">
        <div className="hero__slider owl-carousel">
          {["https://images.pexels.com/photos/623919/pexels-photo-623919.jpeg", "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg", "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg"].map((bgImage, index) => (
            <div key={index} className="hero__item set-bg" style={{ backgroundImage: `url(${bgImage})` }}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="hero__text">
                      <span>Portofolio Pribadi</span>
                      <h2>Idin Code</h2>
                      <p>Selamat datang di portofolio pribadi saya!</p>
                      <a href="404.html" className="primary-btn">Lihat lebih lanjut tentang saya</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default HeroSection;
