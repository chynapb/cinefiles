import { useLocation } from 'react-router-dom';
import { MovieCard } from '../components/MovieCard';
import { Button, Container } from 'react-bootstrap';
import { Search } from '../components/Search';

export const SearchResults = () => {
  const location = useLocation();
  const movies = location.state.results;
  const page = location.state.page;
  const total_pages = location.state.total_pages;
  const total_results = location.state.total_results;

  return (
    <div className='results'>
      <div className='search'>
        <Search />
      </div>
      <h2 className='results-header'>SEARCH RESULTS</h2>
      <p>
        Showing {total_results} results for "{location.state.query}"
      </p>
      <Container className='grid mt-5'>
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
      </Container>
      <div className='pagination'>
        <button className='previous disabled'>Prev</button>
        <p className='current'>Page 1</p>
        <button className='next'>Next</button>
      </div>
    </div>
  );
};
