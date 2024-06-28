import ImgMediaCard from "./Card"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <ImgMediaCard title="Women In Tech"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, similique dolor error reiciendis, a consequuntur, illo at provident vel mollitia porro alias harum ratione expedita facilis temporibus. Vero, aut maxime!"/>
        <ImgMediaCard title="Hope Harbour"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, similique dolor error reiciendis, a consequuntur, illo at provident vel mollitia porro alias harum ratione expedita facilis temporibus. Vero, aut maxime!"/>
        <ImgMediaCard title="Unity Reach"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, similique dolor error reiciendis, a consequuntur, illo at provident vel mollitia porro alias harum ratione expedita facilis temporibus. Vero, aut maxime!"/>
      </Grid>
    </Box>
  );
}
