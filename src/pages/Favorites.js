import { Link } from 'react-router-dom';

export const Favorites = () => {
  return (
    <div className='favorites'>
      <h1>Your Favorites:</h1>
      <p>
        Please{' '}
        <Link to='/login' className='underline'>
          login
        </Link>{' '}
        to see your favorite movies.
      </p>
    </div>
  );
};
