import { Card } from 'react-bootstrap';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export const MovieCard = () => {
  return (
    <>
      <Card className='card'>
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
            8.4
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
            9.6
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
            8.2
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
            9.1
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card'>
        <Card.Img
          className='card-image'
          variant='top'
          src='/imgs/midsommar.jpg'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className='card-body'>
          <Card.Title className='card-title'>Midsommar</Card.Title>
          <Card.Text className='card-rating'>
            <span className='star'>
              <StarRoundedIcon />
            </span>
            7.6
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card'>
        <Card.Img
          className='card-image'
          variant='top'
          src='/imgs/eternal-sunshine.jpg'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className='card-body'>
          <Card.Title className='card-title'>
            Eternal Sunshine of the Spotless Mind
          </Card.Title>
          <Card.Text className='card-rating'>
            <span className='star'>
              <StarRoundedIcon />
            </span>
            8.2
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card'>
        <Card.Img
          className='card-image'
          variant='top'
          src='/imgs/pearl.jpg'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className='card-body'>
          <Card.Title className='card-title'>Pearl</Card.Title>
          <Card.Text className='card-rating'>
            <span className='star'>
              <StarRoundedIcon />
            </span>
            9.3
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='card'>
        <Card.Img
          className='card-image'
          variant='top'
          src='/imgs/gone-girl.jpg'
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className='card-body'>
          <Card.Title className='card-title'>Gone Girl</Card.Title>
          <Card.Text className='card-rating'>
            <span className='star'>
              <StarRoundedIcon />
            </span>
            8.7
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
