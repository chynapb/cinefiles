import Carousel from 'react-grid-carousel';
import requests from '../Api';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const NowPlaying = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.nowPlaying).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <div className='carousel'>
      <h2 className='now-playing-header'>NOW PLAYING</h2>
      <Carousel
        mobileBreakpoint={768}
        cols={3}
        rows={1}
        gap={20}
        responsiveLayout={[
          {
            breakpoint: 768,
            cols: 3,
            rows: 1,
            gap: 10,
            loop: true,
            autoplay: 3000,
          },
        ]}
      >
        <Carousel.Item>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            className='carousel-img'
            style={{ objectFit: 'cover' }}
            alt={movie?.title}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
