import { Card } from 'react-bootstrap';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export const MovieCard = ({ title, poster_path, vote_average }) => {
  return (
    <Card className='movie-card'>
      <Card.Img
        className='movie-card-image'
        variant='top'
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : 'imgs/no-image.png'
        }
        alt={title}
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className='movie-card-body'>
        <Card.Title className='movie-card-title'>{title}</Card.Title>
        <Card.Text className='movie-card-rating'>
          <span className='star'>
            <StarRoundedIcon />
          </span>
          {vote_average.toFixed(1)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
