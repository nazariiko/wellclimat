import React from 'react';
import styled from 'styled-components';
import { SearchedProductCard } from '../../ProductCard';

interface ResultAreaProps {
  hidden: boolean;
}

const StyledResultArea = styled.div`
  position: relative;
  overflow-y: scroll;
  height: 360px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ResultArea: React.FC<ResultAreaProps> = ({ hidden }) => {
  const [status, setStatus] = React.useState<'empty' | 'loading' | 'error'>('empty');

  if (hidden) {
    return <></>;
  }

  return (
    <StyledResultArea>
      <SearchedProductCard />
      <SearchedProductCard />
      <SearchedProductCard />
      <SearchedProductCard />
    </StyledResultArea>
  );
};

export default ResultArea;
