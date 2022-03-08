import React from 'react';
import styled, { keyframes } from 'styled-components';

const preloadingAnimation = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const StyledPreloader = styled.div`
  border-radius: 50%;
  width: 10em;
  height: 10em;

  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  font-size: 4px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.6em solid #282626;
  border-right: 0.6em solid #282626;
  border-bottom: 0.6em solid #282626;
  border-left: 0.6em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${preloadingAnimation} 1.1s infinite linear;
  animation: ${preloadingAnimation} 1.1s infinite linear;
`;

const Preloader = () => {
  return <StyledPreloader />;
};

export default Preloader;
