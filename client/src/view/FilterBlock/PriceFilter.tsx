import React from 'react';
import styled from 'styled-components';

import Slider from '@mui/material/Slider';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        thumb: {
          '&:hover, &.Mui-focusVisible': {
            boxShadow: '0px 0px 0px 10px rgba(117, 0, 189, 0.1)',
          },
          color: '#fff',
          border: '1px solid black',
        },
        track: {
          color: 'white',
        },
        rail: {
          color: 'white',
        },
      },
    },
  },
});

const StyledAreaFilterContainer = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  position: relative;

  .price-slider-from {
    position: absolute;
    top: -20px;
    left: -10px;
    font-weight: normal;
    font-size: 14px;
    line-height: 165.4%;
    color: #ffffff;
  }

  .price-slider-to {
    position: absolute;
    top: -20px;
    right: -20px;
    font-weight: normal;
    font-size: 14px;
    line-height: 165.4%;
    color: #ffffff;
  }
`;

const StyledPriceInfo = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: normal;
    font-size: 16px;
    line-height: 165.4%;
    color: #ffffff;
  }

  .price-from {
    margin-bottom: 5px;
  }
`;

const PriceFilter = () => {
  const [value, setValue] = React.useState([0, 100000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <StyledAreaFilterContainer>
      <span className="price-slider-from">₴0</span>
      <span className="price-slider-to">₴100K</span>
      <ThemeProvider theme={theme}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="off"
          min={0}
          max={100000}
          step={1000}
        />
      </ThemeProvider>
      <StyledPriceInfo>
        <div className="price-from">
          <p>Від:</p>
          <span>{value[0]} гривень</span>
        </div>
        <div className="price-to">
          <p>До:</p>
          <span>{value[1]} гривень</span>
        </div>
      </StyledPriceInfo>
    </StyledAreaFilterContainer>
  );
};

export default PriceFilter;
