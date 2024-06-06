import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFoundPage from './pages/NotFoundPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Work from './components/Work';
import Services from './components/Services';
import HomePage from './pages/HomePage';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div className="body">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
