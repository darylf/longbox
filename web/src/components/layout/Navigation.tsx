import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  a {
    display: block;
    padding: 0.5em 0;
  }
  a:hover {
  }
  li {
    list-style-type: none;
    border-bottom: 1px dotted #3e3e3e;
  }
`;

function PublisherNavigation(): JSX.Element {
  return (
    <ul>
      <li>
        <Link to="/publishers/new">Create publisher</Link>
      </li>
    </ul>
  );
}

function SeriesNavigation(): JSX.Element {
  return (
    <ul>
      <li>
        <Link to="/series/new">Create series</Link>
      </li>
    </ul>
  );
}

function BookNavigation(): JSX.Element {
  return (
    <ul>
      <li>
        <Link to="/books/new">Create book</Link>
      </li>
    </ul>
  );
}

function MainNavigation(): JSX.Element {
  const { pathname: currentPath } = useLocation();

  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/publishers">Publishers</Link>
          {currentPath.startsWith('/publishers') ? <PublisherNavigation /> : ''}
        </li>
        <li>
          <Link to="/series">Series</Link>
          {currentPath.startsWith('/series') ? <SeriesNavigation /> : ''}
        </li>
        <li>
          <Link to="/books">Books</Link>
          {currentPath.startsWith('/books') ? <BookNavigation /> : ''}
        </li>
      </ul>
    </StyledNavigation>
  );
}

export default MainNavigation;
