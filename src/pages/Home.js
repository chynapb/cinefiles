import { useNavigate } from 'react-router-dom';
import { NowPlaying } from '../components/NowPlaying';
import { Popular } from '../components/Popular';
import { UserAuth } from '../context/AuthContext';
import { Loading } from '../components/Loading';
import { useState } from 'react';

export const Home = () => {
  const { user, logout } = UserAuth();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Send user to home page after logout
  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      navigate('/');
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='home'>
      {loading ? (
        <Loading />
      ) : (
        <>
          {user && (
            <div className='welcome'>
              <p className='muted-main'>
                Logged in as <span className='email-span'>{user.email}</span>{' '}
                <button onClick={handleLogout} className='logout-btn'>
                  (LOGOUT)
                </button>
              </p>
            </div>
          )}
        </>
      )}
      <NowPlaying />
      <Popular />
    </div>
  );
};
