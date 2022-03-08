import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ch1 from '../../assets/images/ch1.png';
interface SearchedProductCardProps {
  id: number;
  name: string;
  maxRoomArea: number;
  imageUrl: string;
  price: string;
}

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

      img {
        max-width: 60px;
      }
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

const SearchedProductCard: React.FC<SearchedProductCardProps> = ({
  id,
  name,
  maxRoomArea,
  imageUrl,
  price,
}) => {
  return (
    <StyledSearchedProductCard>
      <Link to={`/product/${id}`}>
        <div className="image-container">
          <img src={imageUrl} alt="Cooper Hunter" />
        </div>
        <div className="info-container">
          <h3 className="conditioner-name">{name}</h3>
          <div className="properties">
            <span className="room-square">до {maxRoomArea}м²</span>
            <span className="price">{price} грн.</span>
          </div>
        </div>
      </Link>
    </StyledSearchedProductCard>
  );
};

export default SearchedProductCard;
