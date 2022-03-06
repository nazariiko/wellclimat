import React from 'react';
import styled from 'styled-components';
import { TopFixedNavigation } from '../../components/TopFixedNavigation';

const StyledHome = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  height: 1000px;
  padding: 0 40px;
  margin: 0 auto;
  margin-top: 50px;
`;

const Home = () => {
  return (
    <StyledHome>
      <TopFixedNavigation />
    </StyledHome>
  );
};

export default Home;
