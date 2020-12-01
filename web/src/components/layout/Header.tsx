import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTopBar = styled.div`
  grid-area: header;
  display: flex;
  height: 4rem;
  align-items: center;
  flex: 0 2 0;
`;

const Logo = styled.div`
  display: inline-block;
  padding: 0 0.5rem;
  font-size: 1.5rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1em;
`;

const ActionButtons = styled.div`
  flex: 3 0 0;
  text-align: right;
`;

interface HeaderProps {
  title: string;
}

const StyledNavigation = styled.nav`
  ul {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  li {
    display: block;
    flex: 0 1 auto;
    list-style-type: none;
    margin: 3em;
  }
`;

const navigation = (
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

const Header: React.FunctionComponent<HeaderProps> = ({
  title
}: HeaderProps) => (
  <StyledTopBar>
    <Logo>
      <Title>{title}</Title>
    </Logo>
    {navigation}
    <ActionButtons></ActionButtons>
  </StyledTopBar>
);

export default Header;
