import { useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export const Details = () => {
  const { id } = useParams();
  const key = process.env.REACT_APP_API_KEY;

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);

  // Fetch movie details
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
      )
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
      });
  }, [id, key]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='movie-details'>
          <h2>{movie.title}</h2>
        </div>
      )}
    </>
  );
};
