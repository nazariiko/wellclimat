import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ch1 from '../../assets/images/ch1.png';

const StyledSearchedProductCard = styled.div`
  padding: 10px;
  padding-right: 30px;
  height: 120px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 100%;
    height: 100%;

    .image-container {
      margin: 0 15px;
      margin-right: 25px;
    }

    .info-container {
      display: flex;
      flex-direction: column;

      .conditioner-name {
        font-weight: 600;
        font-size: 14px;
        line-height: 23px;
        color: #000000;
        margin-bottom: 5px;
      }

      .properties {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .room-square {
          font-weight: normal;
          font-size: 14px;
          line-height: 23px;
          color: #000000;
        }

        .price {
          font-weight: bold;
          font-size: 16px;
          line-height: 26px;
          color: #000000;
        }
      }
    }
  }
`;

const SearchedProductCard = () => {
  return (
    <StyledSearchedProductCard>
      <Link to="/">
        <div className="image-container">
          <img src={ch1} alt="Cooper Hunter" />
        </div>
        <div className="info-container">
          <h3 className="conditioner-name">Кондиціонер Cooper&Hunter СH-S07XN7SM </h3>
          <div className="properties">
            <span className="room-square">до 20м²</span>
            <span className="price">12 360 грн.</span>
          </div>
        </div>
      </Link>
    </StyledSearchedProductCard>
  );
};

export default SearchedProductCard;
