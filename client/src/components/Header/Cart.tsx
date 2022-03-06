import React from 'react';
import styled from 'styled-components';

import favoritesIcon from '../../assets/icons/favorites.svg';

const StyledCart = styled.div`
  position: relative;
  cursor: pointer;

  .favorites-count {
    position: absolute;
    bottom: 0px;
    right: 0px;
    font-weight: 500;
    font-size: 12px;
    line-height: 165.4%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
`;

const Cart = () => {
  return (
    <StyledCart>
      <img src={favoritesIcon} alt="Favorites"></img>
      <span className="favorites-count">1</span>
    </StyledCart>
  );
};

export default Cart;
