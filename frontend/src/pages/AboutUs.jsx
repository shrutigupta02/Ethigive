import Navbar from '../components/Navbar';
import BackgroundImage from '../components/BackgroundImage';
import Footer from '../components/Footer';
import './AboutUs.css';

export default function AboutUs() {
    return (
        <div className='container'>
            <Navbar />
            <div className="hero-section">
                <BackgroundImage />
                <div className="about-overlay">
                    <div className="about-content">
                        <h1>About Ethigive</h1>
                        <p>Welcome to Ethigive, a revolutionary platform that harnesses the power of blockchain technology to facilitate transparent and secure charity donations. Our mission is to empower donors and charities by providing a trustworthy and efficient donation system that ensures every contribution makes a significant impact.</p>
                        
                        <h2>Our Vision</h2>
                        <p>At Ethigive, we envision a world where technology bridges the gap between those who can give and those in need. By leveraging blockchain, we aim to create an ecosystem where every transaction is transparent, traceable, and immutable, fostering trust and accountability in the charitable sector.</p>
                        
                        <h2>Why Choose Us?</h2>
                        <div className="columns">
                            <ul>
                                <li><strong>Transparency:</strong> All transactions are recorded on the blockchain, providing a clear and immutable ledger of donations.</li>
                                <li><strong>Security:</strong> Our platform uses advanced encryption and security protocols to ensure that your donations are safe and secure.</li>
                            </ul>
                            <ul>
                                <li><strong>Impact:</strong> We work with reputable charities to ensure that your contributions are used effectively to make a real difference.</li>
                                <li><strong>Community:</strong> Join a community of like-minded individuals who are committed to making the world a better place through technology-driven philanthropy.</li>
                            </ul>
                        </div>
                        
                        <h2>Our Story</h2>
                        <p>Ethigive was founded by a group of tech enthusiasts and philanthropists who saw the potential of blockchain to transform the charity sector. Frustrated by the lack of transparency and efficiency in traditional donation systems, they set out to create a platform that would address these issues head-on. Today, Ethigive is a thriving community of donors and charities, united by a shared vision of a more equitable and transparent world.</p>
                        
                        <h2>Get Involved</h2>
                        <p>Whether you're a donor looking to make a difference, a charity seeking a reliable donation platform, or a tech enthusiast interested in the intersection of blockchain and philanthropy, there's a place for you at Ethigive. Join us in our mission to revolutionize charity donations and create lasting positive change.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
