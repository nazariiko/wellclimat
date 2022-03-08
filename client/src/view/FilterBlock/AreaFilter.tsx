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

const AreaFilter = () => {
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
      <StyledFilter className={currentFilter === '20' ? 'active' : ''} data-value="20">
        <div onClick={handleFilterClick}></div>
        <p>від 0 м² до 20 м²</p>
      </StyledFilter>
      <StyledFilter className={currentFilter === '40' ? 'active' : ''} data-value="40">
        <div onClick={handleFilterClick}></div>
        <p>від 20 м² до 40 м² </p>
      </StyledFilter>
      <StyledFilter className={currentFilter === '60' ? 'active' : ''} data-value="60">
        <div onClick={handleFilterClick}></div>
        <p>від 40 м² до 60 м²</p>
      </StyledFilter>
      <StyledFilter className={currentFilter === '80' ? 'active' : ''} data-value="80">
        <div onClick={handleFilterClick}></div>
        <p>від 60 м² до 80 м²</p>
      </StyledFilter>
    </StyledFilterContainer>
  );
};

export default AreaFilter;
