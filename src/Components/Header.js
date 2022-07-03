import React from 'react';
import headerlogo from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerlogo} alt="лого"/>
    </header>
  );
}

export default Header;
