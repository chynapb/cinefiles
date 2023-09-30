import { Card } from 'react-bootstrap';

export const MovieCard = () => {
  return (
    <Card className='card'>
      <Card.Img
        variant='top'
        src='/imgs/inception.jpg'
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className='card-body'>
        <Card.Title>Inception</Card.Title>
        <Card.Text>5 Stars</Card.Text>
      </Card.Body>
    </Card>
  );
};
