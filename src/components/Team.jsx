import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faDribbble, faInstagram } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
    {
        name: 'INTAN AULIA',
        role: 'Assistant',
        img: 'https://raw.githubusercontent.com/idincodingweb/packgambar/main/pink_nurulrr-27-05-2024-0001.jpg',
        social: [
            { platform: 'facebook', link: '404.ERROR' },
            { platform: 'twitter', link: '404.ERROR' },
            { platform: 'dribbble', link: '404.ERROR' },
            { platform: 'instagram', link: '404.ERROR' }
        ]
    },
    
    {
        name: 'AMANDA',
        role: 'Design UI UX',
        img: 'https://raw.githubusercontent.com/idincodingweb/packgambar/main/feel__la.26-27-05-2024-0001.jpg',
        social: [
            { platform: 'facebook', link: '404.ERROR' },
            { platform: 'twitter', link: '404.ERROR' },
            { platform: 'dribbble', link: '404.ERROR' },
            { platform: 'instagram', link: '404.ERROR' }
        ]
    },
    // Tambahkan anggota tim lainnya di sini
];

const TeamSection = () => {
    return (
        <section className="team spad set-bg" style={{background: `#100028`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title team__title">
                            <span>Nice to meet</span>
                            <h2>OUR Team</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-6 p-0">
                            <div className="team__item set-bg" style={{backgroundImage: `url(${member.img})`}}>
                                <div className="team__item__text">
                                    <h4>{member.name}</h4>
                                    <p>{member.role}</p>
                                    <div className="team__item__social">
                                        {member.social.map((social, idx) => (
                                            <a key={idx} href={social.link}>
                                                <FontAwesomeIcon icon={social.platform === 'facebook' ? faFacebook : social.platform === 'twitter' ? faTwitter : social.platform === 'dribbble' ? faDribbble : social.platform === 'instagram' ? faInstagram : null} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <div className="team__btn">
                            <a href="404.ERROR" className="primary-btn">Meet Our Team</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
