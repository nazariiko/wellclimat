import React from 'react';
import styled from 'styled-components';
import { LoadMoreButton } from '../../Buttons';

interface LoadMoreProps {
  hidden: boolean;
  handleLoadMore: () => void;
}

const StyledLoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
`;

const LoadMore: React.FC<LoadMoreProps> = ({ hidden, handleLoadMore }) => {
  const loading = false;

  if (hidden) {
    return <></>;
  }

  return (
    <StyledLoadMore>
      <LoadMoreButton onClick={handleLoadMore} disabled={loading}>
        Завантажити ще
      </LoadMoreButton>
    </StyledLoadMore>
  );
};

export default LoadMore;
