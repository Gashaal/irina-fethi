import React from 'react';
import Link from 'gatsby-link';
import Logo from '../Logo';
import Search from '../Search';
import './navmenu.css';


const Navmenu = () => (
  <nav className="navmenu-container">
    <div>
      <Logo/>
      <ul className="navmenu">
        <li className="navmenu__item"><Link to="/page-2/">Обо мне</Link></li>
        <li className="navmenu__item"><Link to="/page-2/">Стихи</Link></li>
      </ul>
    </div>

    <Search/>
  </nav>
);

export default Navmenu;
