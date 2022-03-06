import React from 'react';
import styled from 'styled-components';

import { LoadMore } from './LoadMore';
import { ResultArea } from './ResultArea';
import SearchInput from './SearchInput';

const StyledSearch = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 435px;
  height: fit-content;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
`;

const Search = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [isFocused, _setIsFocused] = React.useState(false);

  const searchContainerRef = React.useRef(null);

  const isFocusedRef = React.useRef(isFocused);
  const setIsFocused = (data: boolean) => {
    isFocusedRef.current = data;
    _setIsFocused(data);
  };

  const handleChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleFocusInput = () => {
    setTimeout(() => {
      if (!isFocusedRef.current) {
        setIsFocused(true);
      }
    }, 100);
  };

  const handleBlurInput = (e: any) => {
    if (isFocusedRef.current && !e.path.includes(searchContainerRef.current)) {
      setIsFocused(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleBlurInput);
  }, []);

  return (
    <StyledSearch ref={searchContainerRef}>
      <SearchInput
        value={searchValue}
        onChange={handleChangeSearchValue}
        onFocus={handleFocusInput}
      />
      <ResultArea hidden={!isFocused} />
      <LoadMore hidden={!isFocused} />
    </StyledSearch>
  );
};

export default Search;
