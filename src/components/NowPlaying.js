import requests from '../Api';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { register } from 'swiper/element/bundle';

register();

export const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const swiperElRef = useRef(null);

  useEffect(() => {
    axios.get(requests.nowPlaying).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <>
      <h2 className='now-playing-header'>NOW PLAYING</h2>
      <div className='swiper'>
        <swiper-container
          ref={swiperElRef}
          slides-per-view='3'
          navigation='true'
          scrollbar
        >
          {movies.map((movie, id) => (
            <swiper-slide key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                className='swiper-img'
                style={{ objectFit: 'cover' }}
                alt={movie?.title}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </>
  );
};
