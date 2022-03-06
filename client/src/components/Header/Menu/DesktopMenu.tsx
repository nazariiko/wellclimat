import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDesktopMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 40px;
`;

const StyledDesktopMenuItem = styled.div`
  margin-left: 35px;

  a {
    text-decoration: none;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    color: #000000;
  }
`;

const DesktopMenu = () => {
  return (
    <StyledDesktopMenu>
      <StyledDesktopMenuItem>
        <Link to="/">Монтаж і обслуговування</Link>
      </StyledDesktopMenuItem>

      <StyledDesktopMenuItem>
        <Link to="/">Наші роботи</Link>
      </StyledDesktopMenuItem>

      <StyledDesktopMenuItem>
        <Link to="/">Доставка і оплата</Link>
      </StyledDesktopMenuItem>

      <StyledDesktopMenuItem>
        <Link to="/">Контакти</Link>
      </StyledDesktopMenuItem>
    </StyledDesktopMenu>
  );
};

export default DesktopMenu;
