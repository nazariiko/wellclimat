import React from 'react';
import styled from 'styled-components';
import { Search } from '../Search';

const StyledTopFixedNavigation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopFixedNavigation = () => {
  return (
    <StyledTopFixedNavigation>
      <Search />
    </StyledTopFixedNavigation>
  );
};

export default TopFixedNavigation;
