import './ProgressBar.css';

const ProgressBar = ({ value, color }) => {
  return (
    <div className='progress-bar'>
      <div className={`progress-bar__color progress-bar__color--${color}`}>
        <div className='progress-bar__value'>{value}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
