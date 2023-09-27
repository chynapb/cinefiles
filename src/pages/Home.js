import { Row } from 'react-bootstrap';
import { MovieCard } from '../components/MovieCard';

export const Home = () => {
  return (
    <>
      <h2 className='now-playing-header'>NOW PLAYING</h2>
      <Row xs={1} md={2} lg={3}>
        <MovieCard />
      </Row>
    </>
  );
};
