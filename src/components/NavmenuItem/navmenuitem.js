import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';

const ItemLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 14px;
  color: #cbcbcb;
  position: relative;
  padding: 10px;
  
  &:after {
    width: 0;
    content: '';
    position: absolute;
    height: 2px;
    display: block;
    margin-top: 5px;
    background: #3f46f1;
    transition: width .2s ease;
    -webkit-transition: width .2s ease;
    left: 0;
  }
  
  &:hover:after {
    width: 100%;
    right: 0;
  }
`;

const Item = styled.li`
  display: flex;
  cursor: pointer;
  
  &:hover ${ItemLink.selector}{
    color: white;
    transition: all 0.3s ease-out;
  }
  ${(props) => props.active && css`
    a {
      color: white;
    }
  `}
`;


const NavmenuItem = (props) => {
  const {item, clickHandler} = props;

  return <Item active={item.active} onClick={clickHandler}>
    <ItemLink to={ item.url }>{ item.title }</ItemLink>
  </Item>;
};

export default NavmenuItem;


