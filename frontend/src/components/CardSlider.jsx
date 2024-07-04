import ImgMediaCard from "./Card"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import './CardSlider.css';

export default function ResponsiveGrid( {projects}) {
  return (
    <Box sx={{ flexGrow: 1 }} className="card-slider-container">
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 4, md: 6 }}>
        {projects.map((project)=>(
          <ImgMediaCard title={project.charityname}  description={project.description} image={project.image} location={project.location}/>
        ))}
      </Grid>
    </Box>
  );
}
