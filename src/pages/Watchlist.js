import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Container } from 'react-bootstrap';

export const Watchlist = () => {
  const { user } = UserAuth();

  return (
    <div className='watchlist'>
      <h1 className='header'>Your Watchlist:</h1>
      {user ? (
        <>
          <h3>To Watch</h3>
          <Container className='grid mt-5'>
            <p className='muted'>Movie</p>
            <p className='muted'>Movie</p>
            <p className='muted'>Movie</p>
            <p className='muted'>Movie</p>
          </Container>
          <h3>Watched:</h3>
          <Container className='grid mt-5'>
            <p className='muted'>Movie</p>
            <p className='muted'>Movie</p>
            <p className='muted'>Movie</p>
            <p className='muted'>Movie</p>
          </Container>
        </>
      ) : (
        <p className='muted-main'>
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
