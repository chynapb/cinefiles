import { Container } from 'react-bootstrap';
import { MovieCard } from './MovieCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../Api';

export const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.popular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <>
      <h2 className='popular-header'>POPULAR MOVIES</h2>
      <Container className='grid mt-5'>
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
      </Container>
    </>
  );
};
