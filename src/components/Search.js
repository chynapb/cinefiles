import { useEffect, useState } from 'react';
import requests from '../Api';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { MovieCard } from './MovieCard';
import { Loading } from './Loading';

export const Search = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch search data
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res = await axios.get(requests.search + `&query=${query}`);
        setMovies(res.data.results);
        setLoading(false);
      } catch (err) {
        alert(err);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <>
      <Container className='search-container'>
        <h5 className='search-header'>SEARCH MOVIES</h5>
        <div className='search'>
          <input
            type='text'
            placeholder='Enter movie title...'
            className='search-input'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </Container>
      <div className='results'>
        {query.length > 0 && (
          <>
            {loading ? (
              <Loading />
            ) : (
              <>
                {movies.length > 0 ? (
                  <Container className='grid mt-5'>
                    {movies.map((movie) => (
                      <MovieCard key={movie.id} {...movie} />
                    ))}
                  </Container>
                ) : (
                  <p>No results found.</p>
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
