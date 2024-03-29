import { useParams, useNavigate } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment/moment';
import axios from 'axios';
import noImage from '../imgs/no-image.png';

export const Details = () => {
  const { user } = UserAuth();
  const { id } = useParams();
  const key = process.env.REACT_APP_API_KEY;

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [watchlist, setWatchlist] = useState(false);

  const navigate = useNavigate();

  const movieID = doc(db, 'users', `${user?.email}`);

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

  // Add movie to favorites
  const addFavorite = async () => {
    if (user) {
      const favoritesMovies = (await getDoc(movieID)).data().favorites;
      const isAlreadyAdded = favoritesMovies.some((fav) => fav.id === movie.id);
      if (isAlreadyAdded) {
        alert('This movie has already been added to your favorites.');
        return;
      }
      setFavorite(true);
      await updateDoc(movieID, {
        favorites: arrayUnion({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
        }),
      });
    } else {
      alert('Please login to add a favorite.');
    }
  };

  // Add movie to watchlist
  const addWatchlist = async () => {
    if (user) {
      const watchlistMovies = (await getDoc(movieID)).data().watchlist;
      const isAlreadyAdded = watchlistMovies.some(
        (watch) => watch.id === movie.id
      );
      if (isAlreadyAdded) {
        alert('This movie has already been added to your watchlist.');
        return;
      }
      setWatchlist(true);
      await updateDoc(movieID, {
        watchlist: arrayUnion({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
        }),
      });
    } else {
      alert('Please login to add to your watchlist.');
    }
  };

  // Check if movie is already in favorites
  useEffect(() => {
    const checkFavorites = async () => {
      if (user) {
        const favoritesMovies = (await getDoc(movieID)).data().favorites;
        const isAlreadyAdded = favoritesMovies.some(
          (fav) => fav.id === movie.id
        );
        if (isAlreadyAdded) {
          setFavorite(true);
        }
      }
    };
    checkFavorites();
  }, [user, movieID, movie.id]);

  // Check if movie is already in watchlist
  useEffect(() => {
    const checkWatchlist = async () => {
      if (user) {
        const watchlistMovies = (await getDoc(movieID)).data().watchlist;
        const isAlreadyAdded = watchlistMovies.some(
          (watch) => watch.id === movie.id
        );
        if (isAlreadyAdded) {
          setWatchlist(true);
        }
      }
    };
    checkWatchlist();
  }, [user, movieID, movie.id]);

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
                    : `${noImage}`
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
                  {watchlist ? (
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
                  {favorite ? (
                    <i className='material-symbols-outlined hearted'>
                      favorite
                    </i>
                  ) : (
                    <i className='material-symbols-outlined'>favorite</i>
                  )}
                </button>
              </div>
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
              <li>
                <span className='secondary'>PRODUCTION COMPANIES: </span>
                {movie.production_companies?.map((company, index) => (
                  <React.Fragment key={company.id}>
                    {company.name}
                    {index < movie.production_companies.length - 1 ? ', ' : ''}
                  </React.Fragment>
                ))}
              </li>
            </ul>
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
