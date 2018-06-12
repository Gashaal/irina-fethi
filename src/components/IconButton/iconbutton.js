import React from 'react';
import './iconbutton.css';


const IconButton = (props) => {
  const className = `icon_button ${props.className}`;
  return <button className={ className }></button>;
};

export default IconButton;
