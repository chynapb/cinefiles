import { useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment/moment';
import axios from 'axios';
import { Container } from 'react-bootstrap';

export const Details = () => {
  const { id } = useParams();
  const key = process.env.REACT_APP_API_KEY;

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);

  // Fetch movie details
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
      )
      .then((res) => {
        setMovie(res.data);
        console.log(res.data);
        setLoading(false);
      });
  }, [id]);

  return (
    <Container className='m-5'>
      {loading ? (
        <Loading />
      ) : (
        <div className='movie-details'>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                : 'imgs/no-image.png'
            }
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <span className='star'>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className='details-rating'>
            {movie.vote_average?.toFixed(1)}
          </span>
          <p className='muted'>
            Release Date: {moment(movie.release_date).format('MMM D, YYYY')}
          </p>
          <div className='movie-description'>{movie.overview}</div>
          <div className='genres'>
            <h5>Genres:</h5>
            {movie.genres?.map((genre) => (
              <p>{genre.name}</p>
            ))}
          </div>
          <div className='runtime'>
            <h5>Runtime:</h5> <p>{movie.runtime} minutes</p>
          </div>
          <div className='prod-companies'>
            <h5>Production Companies:</h5>
            {movie.production_companies?.map((company) => (
              <p>{company.name}</p>
            ))}
          </div>
          <div className='budget'>
            <h5>Budget:</h5> $
            {movie.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
          {movie.homepage && (
            <div className='homepage'>
              <h5>
                <a href={movie.homepage}>Visit Movie Homepage</a>
              </h5>
            </div>
          )}
        </div>
      )}
    </Container>
  );
};
