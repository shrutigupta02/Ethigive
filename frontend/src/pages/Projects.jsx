import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import BackgroundImage from '../components/BackgroundImage';
import Footer from '../components/Footer';
import CardSlider from '../components/CardSlider';
import './Projects.css';
 
export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1234/projects')
            .then(result => {
                setProjects(result.data); // Store the fetched data in state
            })
            .catch(err => {
                console.log(err); // Handle error
            });
    }, []);

    return (
        <div className='container'>
            <Navbar />
            <div className="main-section">
                <BackgroundImage />
                <div className="main-text">
                    <h2>PROJECTS:</h2>
                </div>
            </div>
            <CardSlider projects={projects} /> {/* Pass the fetched projects to CardSlider */}
            <Footer />
        </div>
    ); 
}
