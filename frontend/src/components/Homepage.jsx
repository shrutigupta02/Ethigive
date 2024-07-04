import ResponsiveAppBar from './Navbar';
import BackgroundImage from './BackgroundImage';
import CardSlider from './CardSlider';
import Footer from './Footer';
import './Homepage.css';

export default function Homepage() {
    return (
        <>
            <ResponsiveAppBar />
            <div className="hero-section">
                <BackgroundImage />
                <div className="hero-text">
                    <h1>ETHIGIVE</h1>
                    <p>EMPOWER GIVING, EMBRACE TRANSPARENCY</p>
                </div>
            </div>
            <CardSlider />
            <Footer/>
        </>
    );
}
