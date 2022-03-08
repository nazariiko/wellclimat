import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import closeButton from '../../assets/icons/close.svg';

const StyledCategoryPopupOverlay = styled.div`
  position: absolute;
  z-index: 1000000;
  display: none;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const StyledCategoryPopup = styled.div`
  background: #ffffff;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20px;
  min-width: 800px;
`;

const StyledHeading = styled.div`
  width: 100%;

  p {
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    line-height: 165.4%;
    text-transform: uppercase;
    color: #000000;
  }
`;

const StyledCategories = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;

const StyledCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;

  a {
    font-weight: normal;
    font-size: 18px;
    line-height: 165.4%;
    text-decoration: none;
    color: #000000;
    margin-bottom: 20px;
  }
`;

const StyledCloseButton = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
`;

const CategoryPopup = () => {
  const popupOverlayRef = React.useRef<HTMLDivElement>(null);
  const closeButtonRef = React.useRef<HTMLDivElement>(null);

  const catchOutsideClick = (event: any) => {
    if (event.path[0] === popupOverlayRef!.current) {
      popupOverlayRef!.current!.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };

  const handleClosePopup = () => {
    popupOverlayRef!.current!.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  React.useEffect(() => {
    document.addEventListener('click', catchOutsideClick);
    closeButtonRef!.current!.addEventListener('click', handleClosePopup);
  }, []);

  return (
    <StyledCategoryPopupOverlay ref={popupOverlayRef} className="category-popup-overlay">
      <StyledCategoryPopup>
        <StyledHeading>
          <p>КАТЕГОРІЇ ТЕХНІКИ</p>
        </StyledHeading>
        <StyledCategories>
          <StyledCategoriesContainer>
            <Link to="/products/wall">Настінні кондиціонери</Link>
            <Link to="/products/multi-split">Мульти-спліт кондиціонери</Link>
            <Link to="/products/heat-pumps">Побутові теплові насоси</Link>
            <Link to="/products/industrial">Промислові кондиціонери</Link>
            <Link to="/products/ventilation">Вентиляція</Link>
            <Link to="/products/multi-split-solutions">Готові мульти-спліт рішення</Link>
            <Link to="/products/mobile">Мобільні кондиціонери</Link>
          </StyledCategoriesContainer>
          <StyledCategoriesContainer>
            <Link to="/products/heaters">Обігрівачі</Link>
            <Link to="/products/fancoils">Фанкойли</Link>
            <Link to="/products/water-heaters">Водонагрівачі</Link>
            <Link to="/products/duct">Канальні кондиціонери</Link>
            <Link to="/products/сassette">Касетні кондиціонери</Link>
            <Link to="/products/floor-ceiling">Підлогово-стельові кондиціонери</Link>
            <Link to="/products/semi-industrial-dehumidifiers">Напівпромислові осушувачі</Link>
          </StyledCategoriesContainer>
        </StyledCategories>
        <StyledCloseButton ref={closeButtonRef}>
          <img src={closeButton} alt="close" />
        </StyledCloseButton>
      </StyledCategoryPopup>
    </StyledCategoryPopupOverlay>
  );
};

export default CategoryPopup;
