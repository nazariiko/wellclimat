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

const ColorFilter = () => {
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
      <StyledFilter className={currentFilter === 'white' ? 'active' : ''} data-value="white">
        <div onClick={handleFilterClick}></div>
        <p>Білий</p>
      </StyledFilter>
      <StyledFilter className={currentFilter === 'grey' ? 'active' : ''} data-value="grey">
        <div onClick={handleFilterClick}></div>
        <p>Сірий</p>
      </StyledFilter>
      <StyledFilter className={currentFilter === 'black' ? 'active' : ''} data-value="black">
        <div onClick={handleFilterClick}></div>
        <p>Чорний</p>
      </StyledFilter>
      <StyledFilter className={currentFilter === 'red' ? 'active' : ''} data-value="red">
        <div onClick={handleFilterClick}></div>
        <p>Червоний</p>
      </StyledFilter>
    </StyledFilterContainer>
  );
};

export default ColorFilter;
