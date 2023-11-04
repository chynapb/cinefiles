import { Container } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  return (
    <Container className='search-container'>
      <h5 className='search-header'>SEARCH MOVIES</h5>
      <div className='search'>
        <form>
          <input
            type='text'
            placeholder='Enter movie title...'
            className='search-input'
          />
          <button className='search-btn'>
            <SearchIcon />
          </button>
        </form>
      </div>
    </Container>
  );
};
