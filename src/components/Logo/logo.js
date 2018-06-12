import React from 'react';
import './logo.css';
import logo from './logo.svg';


const Logo = () => (
  <a className="logo">
    <img src={logo} width="56" height="56"/>
    <h1 className="logo__text">Ирина Фетхи</h1>
  </a>
);

export default Logo;
