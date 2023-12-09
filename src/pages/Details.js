import { useParams, useNavigate } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment/moment';
import axios from 'axios';

export const Details = () => {
  const { user } = UserAuth();
  const { id } = useParams();
  const key = process.env.REACT_APP_API_KEY;

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [hearted, setHearted] = useState(false);
  const [added, setAdded] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [watchlist, setWatchlist] = useState(false);

  const navigate = useNavigate();

  const movieID = doc(db, 'users', `${user?.email}`);

  const addFavorite = async () => {
    if (user) {
      setHearted(true);
      setFavorite(true);
      await updateDoc(movieID, {
        favorites: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.poster_path,
          rating: movie.vote_average,
        }),
      });
    } else {
      alert('Please login to add a favorite.');
    }
  };

  const addWatchlist = async () => {
    if (user) {
      setAdded(true);
      setWatchlist(true);
      await updateDoc(movieID, {
        watchlist: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.poster_path,
          rating: movie.vote_average,
        }),
      });
    } else {
      alert('Please login to add to your watchlist.');
    }
  };

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
          <div className='details-btn back' onClick={() => navigate(-1)}>
            Back
          </div>
          <div className='top'>
            <div>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : 'imgs/no-image.png'
                }
                alt={movie.title}
                className='details-img'
              />
            </div>
            <div>
              <div className='top-main'>
                <h2 className='secondary-font bold'>
                  {movie.title?.toUpperCase()}
                </h2>
                <h6 className='italic'>
                  {movie.tagline ? movie.tagline : null}
                </h6>
                <span className='star'>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className='details-rating'>
                  {movie.vote_average?.toFixed(1)} / 10
                </span>
              </div>
              <p className='overview'>{movie.overview}</p>
              <h5 className='secondary-font bold'>GENRES:</h5>
              <ul className='list-group'>
                {movie.genres?.map((genre) => (
                  <React.Fragment key={genre.id}>
                    <li>{genre.name}</li>
                  </React.Fragment>
                ))}
              </ul>
              <div className='action-btns'>
                <button
                  className='watchlist-btn'
                  title='Add to Watchlist'
                  onClick={addWatchlist}
                >
                  {added ? (
                    <i className='material-symbols-outlined added'>add</i>
                  ) : (
                    <i className='material-symbols-outlined'>add</i>
                  )}
                </button>
                <button
                  className='favorites-btn'
                  title='Add to Favorites'
                  onClick={addFavorite}
                >
                  {hearted ? (
                    <i className='material-symbols-outlined hearted'>
                      favorite
                    </i>
                  ) : (
                    <i className='material-symbols-outlined'>favorite</i>
                  )}
                </button>
              </div>
              <>
                {movie.homepage ? (
                  <a href={movie.homepage} className='details-btn homepage-btn'>
                    Visit Movie Homepage
                  </a>
                ) : null}
              </>
            </div>
          </div>
          <div className='bottom'>
            <h4 className='bold secondary-font'>MOVIE INFO</h4>
            <ul className='list-group'>
              <li>
                <span className='secondary'>RELEASE DATE:</span>{' '}
                {moment(movie.release_date).format('MMM D, YYYY')}
              </li>
              <li>
                <span className='secondary'>RUNTIME:</span> {movie.runtime}{' '}
                minutes
              </li>
              <li>
                <span className='secondary'>BUDGET:</span> $
                {movie.budget?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </li>
              <li>
                <span className='secondary'>REVENUE:</span> $
                {movie.revenue
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </li>
            </ul>
            <h6 className='bold secondary-font'>PRODUCTION COMPANIES:</h6>
            <div className='list-group'>
              {movie.production_companies?.map((company) => (
                <React.Fragment key={company.id}>
                  <p>{company.name}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div
            className='overlay'
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            }}
          ></div>
        </>
      )}
    </div>
  );
};
