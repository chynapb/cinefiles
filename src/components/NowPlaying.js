import requests from '../Api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loading } from './Loading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';

export const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch movies now playing
  useEffect(() => {
    setLoading(true);
    axios.get(requests.nowPlaying).then((res) => {
      setMovies(res.data.results);
      setLoading(false);
    });
  }, []);

  return (
    <div className='now-playing'>
      <h2 className='header-2 now-playing-header'>NOW PLAYING</h2>
      {loading ? (
        <Loading />
      ) : (
        <Swiper
          className='swiper'
          spaceBetween={20}
          slidesPerView={1}
          navigation
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
          }}
          breakpoints={{
            700: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {movies.map((movie, id) => (
            <SwiperSlide className='swiper-slide' key={id}>
              <Link
                to={`details/${movie.id}`}
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className='swiper-img'
                  style={{ objectFit: 'cover' }}
                  alt={movie.title}
                />
                <div className='swiper-rating rating'>
                  <span
                    className={
                      movie.vote_average >= 8
                        ? 'green'
                        : movie.vote_average >= 5
                        ? 'yellow'
                        : movie.vote_average >= 0
                        ? 'red'
                        : null
                    }
                  >
                    {movie.vote_average?.toFixed(1)}
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
