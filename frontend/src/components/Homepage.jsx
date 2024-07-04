import ResponsiveAppBar from './Navbar'
import CardSlider from './CardSlider'
import BackgroundImage from './BackgroundImage'
import './Homepage.css';

export default function Homepage(){
    return(
        <>
            <ResponsiveAppBar/>
            <BackgroundImage/>
            <CardSlider/>
        </>
    )
}
