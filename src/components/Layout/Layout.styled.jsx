import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;
  max-width: 1312px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin: 0 auto;
  max-width: 1184px;
`;

export const LogoWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  transition: transform 150ms linear;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LogoText = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
`;

export const LinkStyled = styled(NavLink)`
  line-height: 20px;
  transition: transform 150ms linear, color 150ms linear;

  &:hover {
    transform: scale(1.1);
  }

  &.active {
    color: #e0a39a;
  }
`;
