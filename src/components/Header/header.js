import React from 'react';
import Navmenu from '../Navmenu';
import './header.css';


const Header = () => (
  <header className="page-header">
    <div className="page-header__navmenu">
      <Navmenu/>
    </div>

    <h2 className="page-header__text">
      Лист рисовой бумаги
      <br/>
      Для писем слишком тонок
      <br/>
      Не жди ответа
    </h2>
  </header>
);

export default Header;
