import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export const Favorites = () => {
  const { user } = UserAuth();

  return (
    <div className='favorites'>
      <h1>Your Favorites:</h1>
      {user ? (
        <div>
          <p>Movie</p>
          <p>Movie</p>
          <p>Movie</p>
          <p>Movie</p>
        </div>
      ) : (
        <p>
          Please{' '}
          <Link to='/login' className='underline'>
            login
          </Link>{' '}
          to see your favorite movies.
        </p>
      )}
    </div>
  );
};
