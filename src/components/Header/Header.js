import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LanguageSelector } from '../../App';
import headerLogo from '../../assets/logo.png';
import './Header.scss';

const Header = () => {
  const { setLanguage } = useContext(LanguageSelector);

  return (
    <header className='header'>
      <div className='header__content'>
        <NavLink to='/' className='header__logo'>
          <img src={headerLogo} />
        </NavLink>

        <div className='header__links'>
          <Link to={'/'}>Peliculas</Link>
          <Link to={'/quiz'}>Quiz</Link>
        </div>
      </div>

      <div className='header__lang'>
        <button className='header__button' onClick={() => setLanguage('es-ES')}>ES</button>
        <button className='header__button' onClick={() => setLanguage('en-EN')}>EN</button>
      </div>
    </header>
  );
};

export default Header;
