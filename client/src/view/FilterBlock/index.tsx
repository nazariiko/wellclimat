import React from 'react';
import styled from 'styled-components';

import FilterAccordion from '../../components/FilterAccordion';
import AreaFilter from './AreaFilter';
import BrendFilter from './BrendFilter';
import ColorFilter from './ColorFilter';
import CompresorFilter from './CompresorFilter';
import PriceFilter from './PriceFilter';

const StyledFilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  background: #282626;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 29px;
  width: 320px;
  margin-right: 70px;
  height: fit-content;
`;

const FilterBlock = () => {
  return (
    <StyledFilterBlock>
      <FilterAccordion name={'Площа приміщення'} children={<AreaFilter />} />
      <FilterAccordion name={'Ціна'} children={<PriceFilter />} />
      <FilterAccordion name={'Бренд'} children={<BrendFilter />} />
      <FilterAccordion name={'Тип компресора'} children={<CompresorFilter />} />
      <FilterAccordion name={'Колір'} children={<ColorFilter />} />
    </StyledFilterBlock>
  );
};

export default FilterBlock;
