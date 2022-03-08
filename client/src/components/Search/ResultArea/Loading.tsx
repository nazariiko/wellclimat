import React from 'react';
import styled, { keyframes } from 'styled-components';
import Preloader from '../../Preloader';

const StyledLoading = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  z-index: 10;
`;

const Loading = () => {
  return (
    <StyledLoading>
      <Preloader />
    </StyledLoading>
  );
};

export default Loading;
