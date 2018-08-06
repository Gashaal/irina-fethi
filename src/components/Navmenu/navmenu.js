import React from 'react';
import styled, {css} from 'styled-components';
import IconButton from '../IconButton';
import NavmenuItem from '../NavmenuItem';
import Search from '../Search';
import image from './mobile_menu_icon.svg';
import hoverImage from './mobile_menu_icon_hover.svg';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: calc(100% - 48px);
  
  @media (min-width: 768px) {
    position: relative;
    flex-direction: row;
    width: auto;
  }
`;


// TODO: add animation
const Menu = styled.ul`
  display: none;
  padding: 10px;
  position: absolute;
  width: 100%;
  list-style: none;
  top: 35px;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(0, 0, 0, .9);
  box-sizing: border-box;
  
  ${(props) => props.show && css`
    display: flex;
  `}
  
  @media (min-width: 768px) {
    flex-direction: row;
    background: none;
    position: relative;
    margin: 0;
    padding: 0;
    top: 0;
  }
`;

// TODO: pass width, height by props
const MenuOpenButton = IconButton.extend`
  width: 16px;
  height: 16px;
  padding: 10px;
  align-self: flex-end;
  display: block;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const SearchWrapper = styled.ul`
  display: flex;
  padding: 10px;
`;


class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({show: false}, props);
  }

  toogleMenu(show) {
    this.setState(Object.assign({}, this.state, {show: !this.state.show}));
  }

  clickItem(url) {
    this.setState(Object.assign({}, this.state.items.map((item) => {
      item.active = item.url === url;
      return item;
    })));
  }

  renderItem(item) {
    return <NavmenuItem key={item.url} item={item} clickHandler={ () => this.clickItem(item.url)}/>;
  }

  render() {
    const {show} = this.state;

    return <Wrapper>
      <MenuOpenButton image={image} hoverImage={hoverImage} onClick={ () => this.toogleMenu() }/>
      <Menu show={show}>
        {this.state.items.map((item) => this.renderItem(item))}
        <SearchWrapper><Search/></SearchWrapper>
      </Menu>
    </Wrapper>;
  }
};

export default NavMenu;
