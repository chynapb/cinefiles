import { useNavigate } from 'react-router-dom';
import { NowPlaying } from '../components/NowPlaying';
import { Popular } from '../components/Popular';
import { SearchBar } from '../components/SearchBar';
import { UserAuth } from '../context/AuthContext';

export const Home = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out');
    } catch (error) {
      console.log(error);
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
