import React from 'react';
import Navbar from '../components/Navbar';
import BackgroundImage from '../components/BackgroundImage';
import Footer from '../components/Footer';
import CardSlider from '../components/CardSlider';
import './Projects.css';

export default function Projects() {
    return (
        <div className='container'>
            <Navbar />
            <div className="hero-section">
                <BackgroundImage />
                <div className="hero-text">
                    <h2>PROJECTS</h2>
                </div>
            </div>
            <CardSlider />
            <Footer />
        </div>
    );
}
