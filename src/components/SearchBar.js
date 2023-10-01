import { Button, Container } from 'react-bootstrap';

export const SearchBar = () => {
  return (
    <Container className='search-container'>
      <h5 className='search-header'>SEARCH MOVIES</h5>
      <div className='search'>
        <input type='text' placeholder='Enter movie title...' />
        <Button className='search-btn'>Search</Button>
      </div>
    </Container>
  );
};
