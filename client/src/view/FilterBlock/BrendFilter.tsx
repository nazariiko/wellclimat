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

const BrendFilter = () => {
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
      <StyledFilter
        className={currentFilter === 'Cooper&Hunter' ? 'active' : ''}
        data-value="Cooper&Hunter">
        <div onClick={handleFilterClick}></div>
        <p>Cooper&Hunter</p>
      </StyledFilter>
      <StyledFilter className={currentFilter === 'Gree' ? 'active' : ''} data-value="Gree">
        <div onClick={handleFilterClick}></div>
        <p>Gree</p>
      </StyledFilter>
      <StyledFilter
        className={currentFilter === 'Panasonic' ? 'active' : ''}
        data-value="Panasonic">
        <div onClick={handleFilterClick}></div>
        <p>Panasonic</p>
      </StyledFilter>
      <StyledFilter className={currentFilter === 'Daiko' ? 'active' : ''} data-value="Daiko">
        <div onClick={handleFilterClick}></div>
        <p>Daiko</p>
      </StyledFilter>
    </StyledFilterContainer>
  );
};

export default BrendFilter;
