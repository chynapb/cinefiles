import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { MovieCard } from '../components/MovieCard';

export const Popular = () => {
  return (
    <>
      <h2 className='popular-header'>POPULAR</h2>
      <Container>
        <Row xs={1} md={2} className='g-4'>
          <MovieCard />
        </Row>
      </Container>
    </>
  );
};
