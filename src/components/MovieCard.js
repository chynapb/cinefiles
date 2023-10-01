import { Card } from 'react-bootstrap';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export const MovieCard = () => {
  return (
    <>
      <Card className='card '>
        <Card.Img
          variant='top'
          src='/imgs/inception.jpg'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className='card-body'>
          <Card.Title>Inception</Card.Title>
          <Card.Text>
            <span className='star'>
              <StarRoundedIcon />
            </span>
            5
          </Card.Text>
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
          <Card.Text>
            <span className='star'>
              <StarRoundedIcon />
            </span>
            5
          </Card.Text>
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
          <Card.Text>
            <span className='star'>
              <StarRoundedIcon />
            </span>
            4
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card'>
        <Card.Img
          className='no-image'
          variant='top'
          src='/imgs/no-image.png'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className='card-body'>
          <Card.Title>La La Land</Card.Title>
          <Card.Text>
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
