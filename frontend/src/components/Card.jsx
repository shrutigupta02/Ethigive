import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css';

export default function ImgMediaCard({title, description,location,  image}) {
  const styles = {
    backgroundColor: 'rgb(0, 0, 0, 0.3)',
    color: 'white',
    margin: '10px'
  }


  return (
    <Card
      style={styles}
      className='card'
      sx={{ maxWidth: 345 }}>
      <CardMedia
        className='img'
        component="img"
        height="210"
        image={image}
      />
      <CardContent>
        <Typography 
          gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography 
          style={{color:'whitesmoke'}}
          variant="body2" color="text.secondary">
          {location}
        </Typography>
        <Typography 
          style={{color:'whitesmoke'}}
          variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions
        className='buttons'
      >
        <Button size="small">Donate</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
