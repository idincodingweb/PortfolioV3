import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Work from '../components/Work';
import Team from '../components/Team';
import Action from '../components/Action';
import Footer from '../components/Footer';

const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="body" >
            <Hero />
            <Services id="service" />
            <Work id="work" />
            <Team />
            <Action />
            <Footer />
        </div>
    );
}

export default HomePage;
