import { generateColor, roundedToFixed } from '../../utils/utils';
import ProgressBar from '../ProgressBar/ProgressBar';
import './Card.scss';

const API_IMAGE = process.env.REACT_APP_API_IMAGE;

const Card = ({ item, circleInfo, type = 'vertical', onClick }) => {
  const porcentVote = roundedToFixed(item?.vote_average) * 10;
  const colorVote = generateColor(porcentVote);

  console.log(item)

  return (
    <div className={`card card--${type}`} onClick={() => onClick()}>
      {item && <>
        <div className='card__img'>
          <img src={`${API_IMAGE}${item.poster_path || item.profile_path}`} />
          {circleInfo && <ProgressBar value={`${porcentVote}%`} color={colorVote}></ProgressBar>}
        </div>
        <div className='card__info'>
          <p className='card__title'>{item.original_title || item.original_name}</p>
          <p className='card__description'>{type === 'horizontal' ? `${porcentVote}%` : item.release_date || item.character}</p>
        </div>
      </>}
    </div>
  );
};

export default Card;
