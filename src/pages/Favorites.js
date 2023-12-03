import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export const Favorites = () => {
  const { user } = UserAuth();

  return (
    <div className='favorites'>
      <h1 className='header'>Your Favorites:</h1>
      {user ? (
        <div>
          <p className='muted'>Movie</p>
          <p className='muted'>Movie</p>
          <p className='muted'>Movie</p>
          <p className='muted'>Movie</p>
        </div>
      ) : (
        <p className='muted-main'>
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
