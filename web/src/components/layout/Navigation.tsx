import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  a {
    display: block;
    padding: 0.5em 0;
  }
  a:hover {
    background-color: #f00;
    color: #fff;
  }
  li {
    list-style-type: none;
    border-bottom: 1px solid #000;
  }
  li:first-child {
    border-top: 1px solid #000;
  }
`;

function Navigation(): JSX.Element {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/my-books">My Books</Link>
        </li>
        <li>
          <Link to="/publishers">Browse</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </StyledNavigation>
  );
}

export default Navigation;
