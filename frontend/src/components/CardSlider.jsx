import ImgMediaCard from "./Card"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import './CardSlider.css';

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} className="card-slider-container">
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 4, md: 6 }}>
        <ImgMediaCard title="Women In Tech"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, similique dolor error reiciendis, a consequuntur, illo at provident vel mollitia porro alias harum ratione expedita facilis temporibus. Vero, aut maxime!"/>
        <ImgMediaCard title="Hope Harbour"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, similique dolor error reiciendis, a consequuntur, illo at provident vel mollitia porro alias harum ratione expedita facilis temporibus. Vero, aut maxime!"/>
        <ImgMediaCard title="Unity Reach"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, similique dolor error reiciendis, a consequuntur, illo at provident vel mollitia porro alias harum ratione expedita facilis temporibus. Vero, aut maxime!"/>
      </Grid>
    </Box>
  );
}
