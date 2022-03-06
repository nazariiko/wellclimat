import React from 'react';
import styled from 'styled-components';
import Cart from './Cart';

import DesktopMenu from './Menu/DesktopMenu';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  max-width: 1280px;
  height: 100px;
  padding: 0 40px;
  margin: 0 auto;
`;

const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 500;
    font-size: 36px;
    line-height: 50px;
    letter-spacing: 0.15em;
  }

  p {
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <h2>wellclimat</h2>
        <p>продаж та встановлення кондиціонерів</p>
      </StyledLogo>
      <DesktopMenu />
      <Cart />
    </StyledHeader>
  );
};

export default Header;
