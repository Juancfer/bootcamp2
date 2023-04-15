import PlayButton from '../PlayButton/PlayButton';
import Button from '../../Button/Button';
import useFetch from '../../../hooks/useFetch';
import { usePagination } from '../../../hooks/usePagination';
import './LastMovies.scss';

const API_FILTER = process.env.REACT_APP_API_FILTER;

const LastMovies = () => {
  const [lastMovies] = useFetch('/discover/movie', API_FILTER);
  console.log(lastMovies);
  const [firstItems, showMore, theAreMore] = usePagination(lastMovies?.results, 4);

  return (
    <div className='last-movies'>
      {firstItems &&
        firstItems.map((movie) => {
          return (
            <PlayButton
              key={movie.id}
              title={movie.original_title}
            ></PlayButton>
          );
        })}
      <div className='last-movies__button'>
        <Button
          type='primary'
          text='+ More'
          onClick={() => (theAreMore ? showMore() : false)}
        />
      </div>
    </div>
  );
};

export default LastMovies;
