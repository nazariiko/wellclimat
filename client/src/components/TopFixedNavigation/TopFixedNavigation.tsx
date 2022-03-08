import React from 'react';
import styled from 'styled-components';
import AllProducts from '../../view/AllProducts';
import { Search } from '../Search';

const StyledTopFixedNavigation = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 45px;
`;

const TopFixedNavigation = () => {
  return (
    <StyledTopFixedNavigation>
      <Search />
      <AllProducts />
    </StyledTopFixedNavigation>
  );
};

export default TopFixedNavigation;
