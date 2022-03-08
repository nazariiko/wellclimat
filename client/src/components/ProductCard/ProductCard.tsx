import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ProductCardProps {
  id: number;
  name: string;
  maxRoomArea: number;
  imageUrl: string;
  price: string;
}

const StyledProductCard = styled.div`
  width: 350px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  margin-left: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 50px;

  .product-card-image {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 210px;

    img {
      width: 270px;
    }
  }

  .product-card-name {
    margin-bottom: 11px;

    h3 {
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
      color: #000000;
    }
  }

  .product-card-area {
    margin-bottom: 25px;

    p {
      font-weight: normal;
      font-size: 16px;
      line-height: 165.4%;
      color: #000000;
    }
  }

  .product-card-price {
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    margin-top: auto;

    h2 {
      font-weight: bold;
      font-size: 18px;
      line-height: 165.4%;
      color: #000000;
      margin-right: 18px;
    }

    span {
      font-weight: normal;
      font-size: 16px;
      line-height: 165.4%;
      text-decoration-line: line-through;
      color: #c9c9c9;
    }
  }

  .product-card-action-buttons {
    display: flex;
    align-items: center;
    width: 100%;

    button {
      height: 50px;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #000000;
      padding: 0 30px;
      border: 1px solid #000000;
      margin-right: 20px;
      outline: none;
      border-radius: 25px;
      background: white;
      cursor: pointer;
    }

    a {
      text-decoration: none;
      height: 50px;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
      background: #282626;
      border-radius: 25px;
      display: flex;
      align-items: center;
      padding: 0 30px;
    }
  }
`;

const ProductCard: React.FC<ProductCardProps> = ({ id, name, maxRoomArea, imageUrl, price }) => {
  return (
    <StyledProductCard>
      <div className="product-card-image">
        <img src={imageUrl} alt="air-conditioner" />
      </div>
      <div className="product-card-name">
        <h3>{name}</h3>
      </div>
      <div className="product-card-area">
        <p>Площа приміщення: до {maxRoomArea}м²</p>
      </div>
      <div className="product-card-price">
        <h2>{price} грн.</h2>
        <span>{+price - 200} грн.</span>
      </div>
      <div className="product-card-action-buttons">
        <button className="order-button">Замовити</button>
        <Link to={`/product/${id}`}>Детальніше</Link>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
