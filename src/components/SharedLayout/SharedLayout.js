import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
  position: relative;
  width: 180px;
  height: 60px;
  margin-right: 30px;
  padding: 10px;
  line-height: 60px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  font-size: 30px;
  transition: 0.5s;
  border: 1px solid #ec1840;
  &:hover {
    border: 1px solid transparent;
    background: #ec1840 url('https://i.postimg.cc/wBXGXbWN/pixel.png'); // 360px x 1080px
    transition-delay: 0.8s;
    background-size: 180px;
    animation: animate 0.8s steps(8) forwards;
  }
  &.active {
    border: 1px solid transparent;
    background: #ec1840 url('https://i.postimg.cc/wBXGXbWN/pixel.png'); // 360px x 1080px
    transition-delay: 0.8s;
    background-size: 180px;
    animation: animate 0.8s steps(8) forwards;
  }

  @keyframes animate {
    0% {
      background-position-y: 0;
    }
    100% {
      background-position-y: -480px;
    }
  }
`;

const NavList = styled('nav')`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const SharedLayout = () => {
  return (
    <div>
      <NavList>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </NavList>
      <Outlet />
    </div>
  );
};
