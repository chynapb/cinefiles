import { Container } from 'react-bootstrap';
import { MovieCard } from './MovieCard';
import { Loading } from './Loading';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../Api';
import { Link } from 'react-router-dom';

export const Popular = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch popular movies
  useEffect(() => {
    setLoading(true);
    axios.get(requests.popular).then((res) => {
      setMovies(res.data.results);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h2 className='header-2 popular-header'>POPULAR MOVIES</h2>
      {loading ? (
        <Loading />
      ) : (
        <Container className='grid mt-5'>
          {movies.length > 0 &&
            movies.map((movie) => (
              <React.Fragment key={movie.id}>
                <Link
                  to={`/details/${movie.id}`}
                  style={{ color: 'inherit', textDecoration: 'inherit' }}
                >
                  <MovieCard {...movie} />
                </Link>
              </React.Fragment>
            ))}
        </Container>
      )}
    </>
  );
};
