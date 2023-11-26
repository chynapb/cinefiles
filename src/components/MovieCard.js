import { Link } from 'react-router-dom';

export const MovieCard = ({ title, poster_path, vote_average, id }) => {
  return (
    <div className='movie-card'>
      <Link
        to={`details/${id}`}
        style={{ color: 'inherit', textDecoration: 'inherit' }}
      >
        <img
          className='movie-card-image'
          variant='top'
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'imgs/no-image.png'
          }
          alt={title}
          style={{ objectFit: 'cover' }}
        />
        <div className='movie-card-body'>
          <div className='movie-card-title'>{title}</div>
          <div className='movie-card-rating'>
            <span
              className={
                vote_average >= 8
                  ? 'green'
                  : vote_average >= 5
                  ? 'yellow'
                  : vote_average >= 0
                  ? 'red'
                  : null
              }
            >
              {vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
