import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css';

export default function ImgMediaCard({title, description}) {
  return (
    <Card
      className='card'
      sx={{ maxWidth: 345 }}>
      <CardMedia
        className='img'
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent
        className='text'
      >
        <Typography 
          className='title'
          gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography 
          className='description'
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
