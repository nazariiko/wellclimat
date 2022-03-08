import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import useDebounce from '../../../hooks/useDebounce';

import { SearchedProductCard } from '../../ProductCard';
import Loading from './Loading';

interface ResultAreaProps {
  hidden: boolean;
  searchValue: string;
  pageNumber: number;
}

interface SearchedProductCard {
  id: number;
  name: string;
  max_room_area: number;
  image_url_1: string;
  price: string;
}

const StyledResultArea = styled.div`
  position: relative;
  overflow-y: scroll;
  height: 360px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  transition: 0.3s all ease;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledEmptySearch = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  p {
    padding: 0 20px;
    font-size: 14px;

    span {
      font-weight: bold;
    }
  }
`;

const ResultArea: React.FC<ResultAreaProps> = ({ hidden, searchValue, pageNumber }) => {
  const [status, setStatus] = React.useState<'empty' | 'loading' | 'error' | 'filled'>('loading');
  const [products, setProducts] = React.useState([]);
  const resultAreaRef = React.useRef<HTMLDivElement>(null);

  const getSearchedProducts = async (debouncedSearchTerm: string) => {
    const response = await axios.get(
      `http://localhost:5000/search?value=${debouncedSearchTerm}&page_number=${pageNumber}`,
    );

    const products = response.data;
    setProducts(products);
    resultAreaRef!.current!.scrollTop = resultAreaRef!.current!.scrollHeight;
    if (products.length) {
      setStatus('filled');
    } else {
      setStatus('empty');
    }
  };

  const debouncedSearchTerm = useDebounce(searchValue, 500);

  React.useEffect(() => {
    if (!hidden) {
      setStatus('loading');
      getSearchedProducts(debouncedSearchTerm);
    }
  }, [hidden, debouncedSearchTerm, pageNumber]);

  if (hidden) {
    return <></>;
  }

  if (status === 'empty') {
    return (
      <StyledEmptySearch>
        <p>
          За результатом "<span>{debouncedSearchTerm}</span>" нічого не знайдено
        </p>
      </StyledEmptySearch>
    );
  }

  return (
    <StyledResultArea ref={resultAreaRef}>
      {status === 'loading' ? <Loading /> : ''}
      {products.map((product: SearchedProductCard) => {
        return (
          <SearchedProductCard
            id={+product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.image_url_1}
            maxRoomArea={+[product.max_room_area]}
            key={product.id}
          />
        );
      })}
    </StyledResultArea>
  );
};

export default ResultArea;
