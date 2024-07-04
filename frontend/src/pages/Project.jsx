import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import axios from 'axios';
import './Project.css'; // Import the CSS file

export default function Project() {
    const { id } = useParams();
    const [project, setProject] = useState({
        charityname: "",
        location: "",
        description: "",
        image: "",
        amountRaised: 0
    });

    useEffect(() => {
        axios.get('http://localhost:1234/projects/' + id)
            .then(result => {
                setProject(result.data); // Store the fetched data in state
                console.log(result.data); // Log the fetched data
            })
            .catch(err => {
                console.log(err); // Handle error
            });
    }, [id]); // Dependency array ensures the effect runs only once when 'id' changes

    return (
        <div className='container'>
            <Navbar />
            <div className='project-details'>
                <h1>{project.charityname}</h1>
                <p>{project.description}</p>
                <h4>{project.location}</h4>
                <img src={project.image} alt="Project" />
                <h3>${project.amountRaised.toLocaleString()}</h3>
            </div>
            <Footer />
        </div>
    );
}
