import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 56px;
  height: 56px;
`;

const LogoText = styled.h1`
  color: white;
  font-size: 16px;
  text-transform: uppercase;
`;

const Logo = () => (
  <LogoLink>
    <LogoImage src={logo}/>
    <LogoText>Ирина Фетхи</LogoText>
  </LogoLink>
);

export default Logo;
