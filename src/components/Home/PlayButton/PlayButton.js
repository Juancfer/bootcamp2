import playImg from '../../../assets/icon-play.png';
import './PlayButton.scss';

const PlayButton = ({ title, onClick }) => {
  return (
    <div className='playButton'>
      <button onClick={onClick}>
        <img src={playImg} alt='play' />
        Ver en youtube
      </button>
      <label>{title}</label>
      <p>Trailer oficial</p>
    </div>
  );
};

export default PlayButton;
