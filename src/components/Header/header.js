import React from 'react';
import styled from 'styled-components';
import Navmenu from '../Navmenu';
import Logo from '../Logo';
import backImage from './header.jpeg';

const PageHeader = styled.header`
  height: 100vh;
  background: url(${backImage});
  background-size: cover;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,.8);
  }
`;

const PageHeaderNavmenu = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

const PageHeaderTitle = styled.h2`
  font-family: 'Marck Script', cursive;
  min-width: 280px;
  font-size: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 1;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const Header = () => {
  const menuItems = [
    {
      url: '/page-1',
      title: 'Обо мне',
      active: true,
    },
    {
      url: '/page-2',
      title: 'Стихи',
    },
  ];

  return <PageHeader>
    <PageHeaderNavmenu>
      <Logo/>
      <Navmenu items={ menuItems }/>
    </PageHeaderNavmenu>

    <PageHeaderTitle>
      Лист рисовой бумаги
      <br/>
      Для писем слишком тонок
      <br/>
      Не жди ответа
    </PageHeaderTitle>
  </PageHeader>;
};

export default Header;
