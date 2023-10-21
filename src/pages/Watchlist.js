import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export const Watchlist = () => {
  const { user } = UserAuth();

  return (
    <div className='watchlist'>
      <h1>Your Watchlist:</h1>
      {user ? (
        <>
          <h3>To Watch</h3>
          <div>
            <p>Movie</p>
            <p>Movie</p>
            <p>Movie</p>
            <p>Movie</p>
          </div>
          <h3>Watched:</h3>
          <div>
            <p>Movie</p>
            <p>Movie</p>
            <p>Movie</p>
            <p>Movie</p>
          </div>
        </>
      ) : (
        <p>
          Please{' '}
          <Link to='/login' className='underline'>
            login
          </Link>{' '}
          to see your watchlist.
        </p>
      )}
    </div>
  );
};
