import Carousel from 'react-grid-carousel';

export const NowPlaying = () => {
  return (
    <div className='carousel'>
      <h2 className='now-playing-header'>NOW PLAYING</h2>
      <Carousel
        mobileBreakpoint={768}
        cols={3}
        rows={1}
        gap={20}
        responsiveLayout={[
          {
            breakpoint: 768,
            cols: 3,
            rows: 1,
            gap: 10,
            loop: true,
            autoplay: 3000,
          },
        ]}
      >
        <Carousel.Item>
          <img
            width='100%'
            src='/imgs/lady-bird.jpg'
            className='carousel-img'
            style={{ objectFit: 'cover' }}
            alt='Cover '
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src='/imgs/midsommar.jpg'
            className='carousel-img'
            style={{ objectFit: 'cover' }}
            alt='Cover '
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src='/imgs/la-la-land.jpg'
            className='carousel-img'
            style={{ objectFit: 'cover' }}
            alt='Cover '
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src='/imgs/american-psycho.jpg'
            className='carousel-img'
            style={{ objectFit: 'cover' }}
            alt='Cover '
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src='/imgs/inception.jpg'
            className='carousel-img'
            style={{ objectFit: 'cover' }}
            alt='Cover '
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src='/imgs/pearl.jpg'
            className='carousel-img'
            style={{ objectFit: 'cover' }}
            alt='Cover '
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src='/imgs/eternal-sunshine.jpg'
            className='carousel-img'
            style={{ objectFit: 'cover' }}
            alt='Cover '
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src='/imgs/gone-girl.jpg'
            className='carousel-img'
            style={{ objectFit: 'cover' }}
            alt='Cover '
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
