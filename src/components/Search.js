import { Container } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requests from '../Api';
import axios from 'axios';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (handleSearch) {
      axios.get(requests.search + `&query=${query}`).then((res) => {
        setSearchResults(res.data.results);
      });
    }
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.length === 0) {
      alert('Please enter a movie title to search.');
      return;
    } else {
      navigate('/search-results', {
        state: {
          query: query,
          results: searchResults,
        },
      });
    }
  };

  return (
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
        <button className='search-btn' onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>
    </Container>
  );
};
