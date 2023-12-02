import { useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment/moment';
import axios from 'axios';

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
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='overlay'>
            <div className='details-btn back'>Back</div>
            <div className='top'>
              <div>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : 'imgs/no-image.png'
                  }
                  alt={movie.title}
                />
              </div>
              <div>
                <h2 className='secondary-font bold'>{movie.title}</h2>
                <span className='star'>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className='details-rating'>
                  {movie.vote_average?.toFixed(1)} / 10
                </span>
                <p className='muted'>
                  Release Date:{' '}
                  {moment(movie.release_date).format('MMM D, YYYY')}
                </p>
                <p>{movie.overview}</p>
                <h5 className='secondary-font bold'>Genres:</h5>
                <ul className='list-group'>
                  {movie.genres?.map((genre) => (
                    <React.Fragment key={genre.id}>
                      <li>{genre.name}</li>
                    </React.Fragment>
                  ))}
                </ul>
                <a href={movie.homepage} className='details-btn'>
                  Visit Movie Homepage
                </a>
              </div>
            </div>
          </div>
          <div className='bottom'>
            <h3 className='bold'>Movie Info</h3>
            <ul>
              <li>
                <span className='secondary'>Runtime:</span> {movie.runtime}{' '}
                minutes
              </li>
              <li>
                <span className='secondary'>Budget:</span> $
                {movie.budget?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </li>
              <li>
                <span className='secondary'>Revenue:</span> $
                {movie.revenue
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </li>
            </ul>
            <h4 className='bold'>Production Companies:</h4>
            <div className='list-group'>
              {movie.production_companies?.map((company) => (
                <React.Fragment key={company.id}>
                  <p>{company.name}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
