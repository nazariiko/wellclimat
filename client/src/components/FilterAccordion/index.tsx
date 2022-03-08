import React from 'react';
import styled from 'styled-components';

import plus from '../../assets/icons/plus.svg';
import minus from '../../assets/icons/minus.svg';

interface FilterAccordionProps {
  name: string;
  children: React.ReactElement | React.ReactNode;
}

const StyledFilterAccordion = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 35px;

  img {
    margin-right: 20px;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 165.4%;
    color: #f57600;
  }
`;

const FilterAccordion: React.FC<FilterAccordionProps> = ({ name, children }) => {
  const [visible, setVisible] = React.useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <StyledFilterAccordion>
      <StyledHeading onClick={toggleVisible}>
        <img src={visible ? minus : plus} alt="icon" />
        <p>{name}</p>
      </StyledHeading>
      {visible ? children : ''}
    </StyledFilterAccordion>
  );
};

export default FilterAccordion;
