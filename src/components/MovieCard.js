import { Card } from 'react-bootstrap';

export const MovieCard = () => {
  return (
    <>
      <Card className='card '>
        <Card.Img
          variant='top'
          src='/imgs/inception.jpg'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className='card-body '>
          <Card.Title>Inception</Card.Title>
          <Card.Text>5 Stars</Card.Text>
        </Card.Body>
      </Card>
      <Card className='card'>
        <Card.Img
          variant='top'
          src='/imgs/lady-bird.jpg'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className='card-body'>
          <Card.Title>Lady Bird</Card.Title>
          <Card.Text>5 Stars</Card.Text>
        </Card.Body>
      </Card>
      <Card className='card'>
        <Card.Img
          variant='top'
          src='/imgs/american-psycho.jpg'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className='card-body'>
          <Card.Title>American Psycho</Card.Title>
          <Card.Text>4 Stars</Card.Text>
        </Card.Body>
      </Card>
      <Card className='card'>
        <Card.Img
          variant='top'
          src='/imgs/la-la-land.jpg'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className='card-body'>
          <Card.Title>La La Land</Card.Title>
          <Card.Text>5 Stars</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
