import { Card } from 'react-bootstrap';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const MovieCard = ({ title, poster_path, vote_average }) => {
  return (
    <div className='movie-card'>
      <img
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
      <div className='movie-card-body'>
        <div className='movie-card-title'>{title}</div>
        <div className='movie-card-rating'>
          <span className='icon'>
            <FontAwesomeIcon icon={faStar} />
          </span>
          {vote_average.toFixed(1)}
        </div>
        {/* <div className='movie-card-rating'>
          <span className='movie-star'>
            <StarRoundedIcon />
          </span>
        </div> */}
      </div>
    </div>
  );
};
