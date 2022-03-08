import React from 'react';
import styled from 'styled-components';

import menuDots from '../../assets/icons/menuDots.svg';

const StyledAllProducts = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0;

  p {
    margin-right: 20px;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: #000000;
    text-transform: uppercase;
  }

  img {
    cursor: pointer;
  }
`;

const AllProducts = () => {
  const handleOpenCategories = () => {
    const categoriesPopup: HTMLDivElement | null =
      document.querySelector('.category-popup-overlay');
    categoriesPopup!.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  return (
    <StyledAllProducts>
      <p>Всі товари</p>
      <img onClick={handleOpenCategories} src={menuDots} alt="menu" />
    </StyledAllProducts>
  );
};

export default AllProducts;
