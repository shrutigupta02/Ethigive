import Navbar from '../components/Navbar';
import BackgroundImage from '../components/BackgroundImage';
import Footer from '../components/Footer';
import './Homepage.css';

export default function Homepage() {
    return (
        <div className='container'>
            <Navbar/>
            <div className="hero-section">
                <BackgroundImage />
                <div className="hero-text">
                    <h1>ETHIGIVE</h1>
                    <p>EMPOWER GIVING, EMBRACE TRANSPARENCY</p>
                </div>
            </div>
            
            <Footer/>
        </div>
    );
}
