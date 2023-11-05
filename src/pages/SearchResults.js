import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from 'react-router-dom';
import { MovieCard } from '../components/MovieCard';
import { Container } from 'react-bootstrap';

export const SearchResults = () => {
  const location = useLocation();
  const movies = location.state.results;

  return (
    <div className='results'>
      <div className='search'>
        <input
          type='text'
          placeholder='Enter movie title...'
          className='search-input'
        />
        <button className='search-btn'>
          <SearchIcon />
        </button>
      </div>
      <h2 className='results-header'>SEARCH RESULTS</h2>
      <p>Showing results for "{location.state.query}"</p>
      <Container className='grid mt-5'>
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
      </Container>
    </div>
  );
};
