import React, { ChangeEventHandler, EventHandler } from 'react';
import styled from 'styled-components';

interface SearchInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
}

const StyledSearchInput = styled.div`
  width: 100%;
  padding: 10px;

  input {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    outline: none;
    border: none;
    margin-left: 10px;
    font-size: 16px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  input::placeholder {
    font-size: 16px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.3);
  }
`;

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, onFocus }) => {
  return (
    <StyledSearchInput>
      <input value={value} onChange={onChange} onFocus={onFocus} placeholder="Пошук техніки..." />
    </StyledSearchInput>
  );
};

export default SearchInput;
