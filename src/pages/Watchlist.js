import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AppContext';

export const Watchlist = () => {
  const { user } = UserAuth();

  return (
    <div className='watchlist'>
      <h1>Your Watchlist:</h1>
      {user ? (
        <>
          <h3>To Watch</h3>
          <div>
            <p className='muted'>Movie</p>
            <p className='muted'>Movie</p>
            <p className='muted'>Movie</p>
            <p className='muted'>Movie</p>
          </div>
          <h3>Watched:</h3>
          <div>
            <p className='muted'>Movie</p>
            <p className='muted'>Movie</p>
            <p className='muted'>Movie</p>
            <p className='muted'>Movie</p>
          </div>
        </>
      ) : (
        <p className='muted'>
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
