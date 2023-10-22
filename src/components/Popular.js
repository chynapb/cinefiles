import { Container } from 'react-bootstrap';
import { MovieCard } from './MovieCard';
import requests from '../Api';

export const Popular = () => {
  return (
    <>
      <h2 className='popular-header'>POPULAR MOVIES</h2>
      <Container className='grid mt-5'>
        <MovieCard fetchURL={requests.popular} />
      </Container>
    </>
  );
};
