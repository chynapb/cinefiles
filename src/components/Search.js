import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import requests from '../Api';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { MovieCard } from './MovieCard';

export const Search = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  // Handle search button click
  const handleSearch = (e) => {
    e.preventDefault();

    axios.get(requests.search + `&query=${query}`).then((res) => {
      setMovies(res.data.results);
    });
    setQuery('');
  };

  return (
    <>
      <Container className='search-container'>
        <h5 className='search-header'>SEARCH MOVIES</h5>
        <div className='search'>
          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Enter movie title...'
              className='search-input'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className='search-btn' type='submit'>
              <SearchIcon />
            </button>
          </form>
        </div>
      </Container>
      <div className='results'>
        <Container className='grid mt-5'>
          {movies.length > 0 &&
            movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
        </Container>
      </div>
    </>
  );
};
