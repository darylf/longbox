import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  grid-area: sidebar;
  border-right: 1px dotted #c1c1c1;
  height: 100vh;
  padding: 1em;
`;

const StyledNavigation = styled.nav`
  a {
    display: block;
    padding: 0.5em 0;
  }
  a:hover {
  }
  > ul + ul {
    border-top: 1px dotted #3e3e3e;
  }
  > ul > li {
    list-style-type: none;
  }
`;

function Navigation(): JSX.Element {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link to="/series">Browse Books</Link>
        </li>
        <li>
          <Link to="/publishers">Browse Publishers</Link>
        </li>
        <li>
          <Link to="/trending">Trending</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/my-collection">My Collection</Link>
        </li>
        <li>
          <Link to="/my-wishlist">My Wishlist</Link>
        </li>
        <li>
          <Link to="/my-account">My Account</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contribute">Contribute</Link>
        </li>
      </ul>
    </StyledNavigation>
  );
}

const StyledLogo = styled.div``;

const Logo: React.FunctionComponent = () => (
  <StyledLogo>
    <a href="/">
      <img
        src="https://via.placeholder.com/200x100?text=Logo"
        alt="Logo"
        title="Logo"
      />
    </a>
  </StyledLogo>
);

const Sidebar: React.FunctionComponent = () => (
  <StyledSidebar>
    <Logo />
    <Navigation />
  </StyledSidebar>
);

export default Sidebar;
