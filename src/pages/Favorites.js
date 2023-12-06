import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Container } from 'react-bootstrap';

export const Favorites = () => {
  const { user } = UserAuth();

  return (
    <div className='favorites'>
      <h1 className='header'>Your Favorites:</h1>
      <Container className='grid mt-5'>
        {user ? (
          <div>
            <p className='muted'>Movie</p>
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
      </Container>
    </div>
  );
};
