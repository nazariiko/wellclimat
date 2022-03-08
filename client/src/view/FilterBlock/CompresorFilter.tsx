import React from 'react';
import styled from 'styled-components';

const StyledFilterContainer = styled.div`
  margin-left: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  div {
    margin-right: 12px;
    width: 15px;
    height: 15px;
    border: 1px solid white;
    border-radius: 3px;
    cursor: pointer;
  }

  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 165.4%;
    color: #ffffff;
  }

  &.active div {
    background-color: white;
  }
`;

const CompresorFilter = () => {
  const [currentFilter, setCurrentFilter] = React.useState('all');

  const handleFilterClick = (event: any) => {
    let target = event.target;
    let targetFilter = target.parentElement.dataset.value;
    if (currentFilter === targetFilter) {
      setCurrentFilter('all');
    } else {
      setCurrentFilter(targetFilter);
    }
  };

  return (
    <StyledFilterContainer>
      <StyledFilter className={currentFilter === 'invertor' ? 'active' : ''} data-value="invertor">
        <div onClick={handleFilterClick}></div>
        <p>Інверторний</p>
      </StyledFilter>
      <StyledFilter
        className={currentFilter === 'no-invertor' ? 'active' : ''}
        data-value="no-invertor">
        <div onClick={handleFilterClick}></div>
        <p>Не інверторний</p>
      </StyledFilter>
    </StyledFilterContainer>
  );
};

export default CompresorFilter;
