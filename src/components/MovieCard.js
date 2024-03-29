import noImage from '../imgs/no-image.png';

export const MovieCard = ({ title, poster_path, vote_average }) => {
  return (
    <div className='movie-card'>
      <img
        className='movie-card-img'
        variant='top'
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `${noImage}`
        }
        alt={title}
        style={{ objectFit: 'cover' }}
      />
      <div className='movie-card-body'>
        <div className='movie-card-title'>{title}</div>
        <div className='movie-card-rating rating'>
          <span
            className={
              vote_average >= 8
                ? 'green'
                : vote_average >= 6
                ? 'yellow'
                : vote_average >= 5
                ? 'orange'
                : vote_average >= 0
                ? 'red'
                : null
            }
          >
            {vote_average?.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};
