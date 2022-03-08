import React from 'react';
import styled from 'styled-components';
import CategoryPopup from '../../components/CategoryModal/CategoryPopup';
import { TopFixedNavigation } from '../../components/TopFixedNavigation';
import FilterBlock from '../../view/FilterBlock';
import ProductsBlock from '../../view/ProductsBlock';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  height: fit-content;
  padding: 0 40px;
  margin: 0 auto;
  margin-top: 150px;
  margin-bottom: 50px;
`;

const StyledMainContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Home = () => {
  return (
    <StyledHome>
      <TopFixedNavigation />
      <StyledMainContent>
        <FilterBlock />
        <ProductsBlock />
      </StyledMainContent>
      <CategoryPopup />
    </StyledHome>
  );
};

export default Home;
