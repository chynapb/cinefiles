import requests from '../Api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loading } from './Loading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(requests.nowPlaying).then((res) => {
      setMovies(res.data.results);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h2 className='now-playing-header'>NOW PLAYING</h2>
      {loading ? (
        <Loading />
      ) : (
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
            },
            700: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {movies.map((movie, id) => (
            <SwiperSlide key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className='swiper-img'
                style={{ objectFit: 'cover' }}
                alt={movie.title}
              />
              <div className='swiper-rating'>
                <span className='star'>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                {movie.vote_average.toFixed(1)}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
