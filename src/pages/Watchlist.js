import { Link } from 'react-router-dom';

export const Watchlist = () => {
  return (
    <div className='watchlist'>
      <h1>Your Watchlist:</h1>
      <p>
        Please{' '}
        <Link to='/login' className='underline'>
          login
        </Link>{' '}
        to see your watchlist.
      </p>
    </div>
  );
};
