import { Card } from 'react-bootstrap';

export const MovieCard = () => {
  return (
    <Card style={{ border: 'none' }} className='shadow bg-white'>
      <Card.Img
        variant='top'
        src='/imgs/inception.jpg'
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className='d-flex flex-column'>
        <Card.Title>Inception</Card.Title>
        <Card.Text className='text-muted'>5 Stars</Card.Text>
      </Card.Body>
    </Card>
  );
};
