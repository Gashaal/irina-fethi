import React from 'react';
import Navmenu from '../Navmenu';
import Logo from '../Logo';
import './header.css';


const Header = () => {
  const menuItems = [
    {
      url: '/page-1',
      title: 'Обо мне',
    },
    {
      url: '/page-2',
      title: 'Стихи',
    },
  ];

  return <header className="page-header">
    <div className="page-header__navmenu">
      <Logo/>
      <Navmenu items={ menuItems }/>
    </div>

    <h2 className="page-header__text">
      Лист рисовой бумаги
      <br/>
      Для писем слишком тонок
      <br/>
      Не жди ответа
    </h2>
  </header>;
};

export default Header;
