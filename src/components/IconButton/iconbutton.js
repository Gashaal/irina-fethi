import styled, { css } from 'styled-components';

const iconSize = '13px';

const IconButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  width: ${iconSize};
  height: ${iconSize};
  background-size: contain;
  outline: none;
  
  background-image: url(${(props) => props.image});
  
  ${(props) => props.hoverImage && css`
    &:hover {
      background-image: url(${(props) => props.hoverImage});
    }
  `}
`;

export default IconButton;
