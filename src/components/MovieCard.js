import { Card } from 'react-bootstrap';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export const MovieCard = () => {
  return (
    <>
      <Card className='card '>
        <Card.Img
          className='card-image'
          variant='top'
          src='/imgs/inception.jpg'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className='card-body'>
          <Card.Title className='card-title'>Inception</Card.Title>
          <Card.Text className='card-rating'>
            <span className='star'>
              <StarRoundedIcon />
            </span>
            5
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card'>
        <Card.Img
          className='card-image'
          variant='top'
          src='/imgs/lady-bird.jpg'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className='card-body'>
          <Card.Title className='card-title'>Lady Bird</Card.Title>
          <Card.Text className='card-rating'>
            <span className='star'>
              <StarRoundedIcon />
            </span>
            5
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card'>
        <Card.Img
          className='card-image'
          variant='top'
          src='/imgs/american-psycho.jpg'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className='card-body'>
          <Card.Title className='card-title'>American Psycho</Card.Title>
          <Card.Text className='card-rating'>
            <span className='star'>
              <StarRoundedIcon />
            </span>
            4
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card'>
        <Card.Img
          className='card-image'
          variant='top'
          src='/imgs/la-la-land.jpg'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className='card-body'>
          <Card.Title className='card-title'>La La Land</Card.Title>
          <Card.Text className='card-rating'>
            <span className='star'>
              <StarRoundedIcon />
            </span>
            5
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
