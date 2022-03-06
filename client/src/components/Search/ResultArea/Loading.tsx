import React from 'react';
import styled from 'styled-components';

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
  background: rgba(255, 255, 255, 0.9);
  z-index: 10;
`;

const Loading = () => {
  return (
    <StyledLoading>
      <div></div>
    </StyledLoading>
  );
};

export default Loading;
