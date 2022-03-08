import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import Preloader from '../../components/Preloader';
import { ProductCard } from '../../components/ProductCard';

interface ProductCard {
  id: number;
  name: string;
  max_room_area: number;
  image_url_1: string;
  price: string;
}

const StyledProductsBlock = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
`;

const StyledLoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  z-index: 10;
  display: none;
  justify-content: center;
  padding-top: 150px;
`;

const ProductsBlock = () => {
  const [products, setProducts] = React.useState([]);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/products');
    setProducts(response.data);
  };

  React.useEffect(() => {
    getProducts();
  }, []);
  return (
    <StyledProductsBlock>
      <StyledLoadingOverlay>
        <Preloader />
      </StyledLoadingOverlay>
      {products.length &&
        products.map((product: ProductCard) => {
          return (
            <ProductCard
              id={+product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.image_url_1}
              maxRoomArea={+[product.max_room_area]}
              key={product.id}
            />
          );
        })}
    </StyledProductsBlock>
  );
};

export default ProductsBlock;
