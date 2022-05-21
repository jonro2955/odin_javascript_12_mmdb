import { Link } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card({ movie }) {
  return (
    <div className='card'>
      <Link to={`/${movie.id}`} className='cardLink'>
        <img
          className='posterImg'
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          width='200'
          height='300'
        ></img>
      </Link>
      <div className='cardDetail'>
        <div>{movie.title}</div>
        <div>Release Date: {movie.release_date}</div>
        <div>
          <FontAwesomeIcon icon={faStar} />
          {movie.vote_average}
        </div>
      </div>
    </div>
  );
}