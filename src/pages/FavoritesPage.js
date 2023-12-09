import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Favorites } from '../components/Favorites';

export const FavoritesPage = () => {
  const { user } = UserAuth();

  return (
    <>
      {user ? (
        <Favorites />
      ) : (
        <p className='favorites-p muted-main'>
          Please{' '}
          <Link to='/login' className='underline'>
            login
          </Link>{' '}
          to see your favorites.
        </p>
      )}
    </>
  );
};
