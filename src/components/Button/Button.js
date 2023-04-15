import { useState } from 'react';
import './Button.scss';

const Button = ({ text, active = false, type = 'primary', onClick }) => {
  const [isActive, setIsActive] = useState(active);

  const handlerOnClik = () => {
    setIsActive(!isActive);
    onClick();
  };

  return (
    <button
      className={`button ${isActive ? 'button--active' : ''} button--${type}`}
      onClick={() => handlerOnClik()}
    >
      {text}
    </button>
  );
};

export default Button;
