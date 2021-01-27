import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faArchive,
  faChartLine,
  faHeart,
  faAward,
  faCog,
  faInfoCircle,
  faHandsHelping,
  faTools
} from '@fortawesome/free-solid-svg-icons';

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
  > ul + ul {
    border-top: 1px dotted #3e3e3e;
  }
  > ul > li {
    list-style-type: none;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 1em;
  font-size: 0.8em;
`;
function Navigation(): JSX.Element {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link to="/series">
            <Icon icon={faBook} /> Browse Books
          </Link>
        </li>
        <li>
          <Link to="/publishers">
            <Icon icon={faArchive} />
            Browse Publishers
          </Link>
        </li>
        <li>
          <Link to="/trending">
            <Icon icon={faChartLine} />
            Trending
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/my-collection">
            <Icon icon={faHeart} />
            My Collection
          </Link>
        </li>
        <li>
          <Link to="/my-wishlist">
            <Icon icon={faAward} />
            My Wishlist
          </Link>
        </li>
        <li>
          <Link to="/my-account">
            <Icon icon={faCog} />
            My Account
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/about">
            <Icon icon={faInfoCircle} />
            About
          </Link>
        </li>
        <li>
          <Link to="/contribute">
            <Icon icon={faHandsHelping} />
            Contribute
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/admin">
            <Icon icon={faTools} />
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
