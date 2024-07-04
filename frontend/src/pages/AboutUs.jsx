import Navbar from '../components/Navbar';
import BackgroundImage from '../components/BackgroundImage';
import Footer from '../components/Footer';


export default function AboutUs(){
    return(
        <div className='container'>
            <Navbar/>
            <div className="hero-section">
                <BackgroundImage />
                
            </div>
            
            <Footer/>
        </div>
    )
}