import React from 'react';
import IconButton from '../IconButton';
import image from './icon.svg';
import hoverImage from './icon-hover.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

const Search = () => (
  <Wrapper>
    <IconButton width={25} image={image} hoverImage={hoverImage}></IconButton>
  </Wrapper>
);

export default Search;
