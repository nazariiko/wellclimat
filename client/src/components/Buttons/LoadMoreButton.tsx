import React from 'react';
import styled from 'styled-components';

interface LoadMoreButtonProps {
  children: React.ReactNode;
  onClick: (event: any) => void;
  disabled: boolean;
}

const StyledLoadMoreButton = styled.button`
  padding: 10px 25px;
  background: #ffffff;
  border: 1px solid #f57600;
  border-radius: 25px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #000000;
  cursor: pointer;
`;

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <StyledLoadMoreButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledLoadMoreButton>
  );
};

export default LoadMoreButton;
