import { useNavigate } from 'react-router-dom';
import { NowPlaying } from '../components/NowPlaying';
import { Popular } from '../components/Popular';
import { SearchBar } from '../components/SearchBar';
import { UserAuth } from '../context/AuthContext';
import requests from '../Api';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {
  const [movies, setMovies] = useState('');
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(requests.nowPlaying).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  console.log(movies);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='home'>
      {user && (
        <div className='welcome'>
          <p>
            Welcome, <span className='email-span'>{user.email}</span>!{' '}
            <button onClick={handleLogout} className='logout-btn'>
              (LOGOUT)
            </button>
          </p>
        </div>
      )}
      <NowPlaying />
      <SearchBar />
      <Popular />
    </div>
  );
};
