import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type NavigationItem = { url: string; title: string };

const NAVIGATION_ITEMS: Array<NavigationItem> = [
  { url: '/', title: 'Home' },
  { url: '/my-books', title: 'My Books' },
  { url: '/books', title: 'Browse' },
  { url: '/users', title: 'Users' }
];

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

function Navigation(): JSX.Element {
  return (
    <StyledNavigation>
      <ul>
        {NAVIGATION_ITEMS.map((item, key) => (
          <li key={key}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </StyledNavigation>
  );
}

export default Navigation;
