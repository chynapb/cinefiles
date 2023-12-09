import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Watchlist } from '../components/Watchlist';

export const WatchlistPage = () => {
  const { user } = UserAuth();

  return (
    <>
      {user ? (
        <Watchlist />
      ) : (
        <p className='watchlist-p muted-main'>
          Please{' '}
          <Link to='/login' className='underline'>
            login
          </Link>{' '}
          to see your watchlist.
        </p>
      )}
    </>
  );
};
