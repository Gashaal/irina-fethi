import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import IconButton from '../IconButton';
import Search from '../Search';
import './navmenu.css';


class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Object.assign(this.props.items),
    };
  }

  clickItem(url) {
    this.setState(Object.assign({}, this.state.items.map((item) => {
      item.active = item.url === url;
      return item;
    })));
  }

  renderItem(item) {
    const className = item.active ? 'navmenu__item active' : 'navmenu__item';
    return (
      <li key={ item.url } className={ className} onClick={ () => this.clickItem(item.url) }>
        <Link to={ item.url }>{ item.title }</Link>
      </li>
    );
  }

  render() {
    return <div className="navmenu__wrapper">
      <IconButton className="navmenu__mobile-open-button"/>
      <ul className="navmenu">
        {this.state.items.map((item) => this.renderItem(item))}
        <li className="navmenu__item navmenu__item--search"><Search/></li>
      </ul>
    </div>;
  }
}

NavMenu.propTypes = {
  items: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default NavMenu;
