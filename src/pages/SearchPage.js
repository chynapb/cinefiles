import { MovieCard } from '../components/MovieCard';
import { Container } from 'react-bootstrap';
import { Search } from '../components/Search';
import requests from '../Api';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const SearchPage = () => {
  return <Search />;
};

// // Get data from Search component
// const location = useLocation();
// const movies = location.state.results;
// const query = location.state.query;
// const page = location.state.page;
// const total_pages = location.state.total_pages;
// const total_results = location.state.total_results;
// // Pagination
// return (
//   <div className='results'>
//     <div className='search'>
//       <Search />
//     </div>
//     <h2 className='results-header'>SEARCH RESULTS</h2>
//     <p>
//       Showing {total_results} results for "{query}"
//     </p>
//     <Container className='grid mt-5'>
//       {movies.length > 0 &&
//         movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
//     </Container>
//     <div className='pagination'>
//       <button className={page === 1 ? 'previous disabled' : 'previous'}>
//         Prev
//       </button>
//       <p className='current'>
//         Page {page} of {total_pages}
//       </p>
//       <button className={page === total_pages ? 'next disabled' : 'next'}>
//         Next
//       </button>
//     </div>
//   </div>
// );
