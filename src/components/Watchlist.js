import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Loading } from './Loading';

export const Watchlist = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    setLoading(true);
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.watchlist);
      setLoading(false);
    });
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`);

  const deleteMovie = async (movieID) => {
    setLoading(true);
    try {
      const updatedMovies = movies.filter((item) => item.id !== movieID);
      await updateDoc(movieRef, {
        watchlist: updatedMovies,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='watchlist'>
      <h1 className='header'>Your Watchlist:</h1>
      {loading ? (
        <Loading />
      ) : (
        <Container className='grid mt-5'>
          {movies.length === 0 ? (
            <h5 className='muted'>You have no movies on your watchlist.</h5>
          ) : (
            movies.map((movie) => (
              <div className='movie-card' key={movie.id}>
                <p className='delete-btn' onClick={() => deleteMovie(movie.id)}>
                  &times;
                </p>
                <Link
                  to={`/details/${movie.id}`}
                  style={{ color: 'inherit', textDecoration: 'inherit' }}
                >
                  <img
                    className='movie-card-image'
                    variant='top'
                    src={
                      movie?.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : 'imgs/no-image.png'
                    }
                    alt={movie?.title}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className='movie-card-body'>
                    <div className='movie-card-title'>{movie?.title}</div>
                    <div className='movie-card-rating'>
                      <span
                        className={
                          movie?.vote_average >= 8
                            ? 'green'
                            : movie?.vote_average >= 5
                            ? 'yellow'
                            : movie?.vote_average >= 0
                            ? 'red'
                            : null
                        }
                      >
                        {movie.vote_average?.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </Container>
      )}
    </div>
  );
};
