import { Button, Container } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
  return (
    <Container className='search-container'>
      <h5 className='search-header'>SEARCH MOVIES</h5>
      <div className='search'>
        <input
          type='text'
          placeholder='Enter movie title...'
          className='search-input'
        />
        <button className='search-btn'>
          <SearchIcon />
        </button>
        <div className='genres'>
          <Button className='genre-btn' variant='outline-light'>
            Action
          </Button>
          <Button className='genre-btn' variant='outline-light'>
            Adventure
          </Button>
          <Button className='genre-btn' variant='outline-light'>
            Comedy
          </Button>
          <Button className='genre-btn' variant='outline-light'>
            Crime
          </Button>
          <Button className='genre-btn' variant='outline-light'>
            Drama
          </Button>
          <Button className='genre-btn' variant='outline-light'>
            Documentary
          </Button>
          <Button className='genre-btn' variant='outline-light'>
            Horror
          </Button>
          <Button className='genre-btn' variant='outline-light'>
            Romance
          </Button>
        </div>
      </div>
    </Container>
  );
};
