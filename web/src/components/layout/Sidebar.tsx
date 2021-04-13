import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../shared/Icon';

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
    text-decoration: none;
    color: #2e444e;
  }
  a:hover {
    color: #666;
  }
  ul {
    padding: 0;
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
          <Link to="/series">
            <Icon name={'book'} /> Browse Series
          </Link>
        </li>
        <li>
          <Link to="/publishers">
            <Icon name={'archive'} />
            Browse Publishers
          </Link>
        </li>
        <li>
          <Link to="/trending">
            <Icon name={'chart-line'} />
            Trending
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/my-collection">
            <Icon name={'heart'} />
            My Collection
          </Link>
        </li>
        <li>
          <Link to="/my-wishlist">
            <Icon name={'list'} />
            My Wishlist
          </Link>
        </li>
        <li>
          <Link to="/my-account">
            <Icon name={'cog'} />
            My Account
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/about">
            <Icon name={'info-circle'} />
            About
          </Link>
        </li>
        <li>
          <Link to="/contribute">
            <Icon name={'github'} type="brand" />
            Contribute
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/admin">
            <Icon name={'tools'} />
            Admin
          </Link>
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
