import { Card } from 'react-bootstrap';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const MovieCard = ({ fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      {movies.map((movie, id) => (
        <Card key={id} className='movie-card'>
          <Card.Img
            className='movie-card-image'
            variant='top'
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={movie?.title}
            style={{ objectFit: 'cover' }}
          />
          <Card.Body className='movie-card-body'>
            <Card.Title className='movie-card-title'>
              {movie?.original_title}
            </Card.Title>
            <Card.Text className='movie-card-rating'>
              <span className='star'>
                <StarRoundedIcon />
              </span>
              {movie?.vote_average.toFixed(1)}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
