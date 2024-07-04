import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Project(){
    const {id} = useParams();
    let {project, setProject} = useState({});

    useEffect(() => {
        axios.get('http://localhost:1234/projects/'+id)
            .then(result => {
                setProject(result.data); // Store the fetched data in state
            })
            .catch(err => {
                console.log(err); // Handle error
            });
    }, []);

    return(
        <div className='container'>
            <Navbar/>
            <div>
                <h1 >{project.charityname}</h1>
                <p>{project.description}</p>
                <h4>{project.location}</h4>
                <img src={project.image}></img>
                <h3>{project.amountRaised}</h3>
            </div>
            <Footer/>
        </div>
    )
}