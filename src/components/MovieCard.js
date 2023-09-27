import { Card } from 'react-bootstrap';

export const MovieCard = () => {
  return (
    <>
      <Card style={{ border: 'none', width: '18rem' }} className='card-style'>
        <Card.Img
          variant='top'
          src='/imgs/inception.jpg'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>Inception</Card.Title>
          <Card.Text>5 Stars</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ border: 'none', width: '18rem' }} className='card-style'>
        <Card.Img variant='top' src='/imgs/inception.jpg' />
        <Card.Body>
          <Card.Title>Inception</Card.Title>
          <Card.Text>5 Stars</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ border: 'none', width: '18rem' }} className='card-style'>
        <Card.Img variant='top' src='/imgs/inception.jpg' />
        <Card.Body>
          <Card.Title>Inception</Card.Title>
          <Card.Text>5 Stars</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ border: 'none', width: '18rem' }} className='card-style'>
        <Card.Img variant='top' src='/imgs/inception.jpg' />
        <Card.Body>
          <Card.Title>Inception</Card.Title>
          <Card.Text>5 Stars</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
