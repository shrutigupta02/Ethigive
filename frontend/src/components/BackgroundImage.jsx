import img from "../assets/main.jpg";
import './BackgroundImage.css';

export default function BackgroundImage() {
    return (
        <div className="background-container">
            <img src={img} alt="Background" className="background-image" />
        </div>
    );
}
