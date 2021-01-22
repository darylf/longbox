import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  a {
    display: block;
    padding: 0.5em 0;
  }
  a:hover {
  }
  > ul > li {
    list-style-type: none;
    border-bottom: 1px dotted #3e3e3e;
  }
`;

function MainNavigation(): JSX.Element {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/publishers">Publishers</Link>
          <ul>
            <li>
              <Link to="/publishers/new">Create publisher</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/series">Series</Link>
          <ul>
            <li>
              <Link to="/series/new">Create series</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/books">Books</Link>
          <ul>
            <li>
              <Link to="/books/new">Create book</Link>
            </li>
          </ul>
        </li>
      </ul>
    </StyledNavigation>
  );
}

export default MainNavigation;
