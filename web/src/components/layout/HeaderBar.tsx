import * as React from 'react';
import styled from 'styled-components';
import SearchBox from '../shared/SearchBox';

const StyledHeaderBar = styled.div`
  text-align: left;
  display: flex;
  margin-bottom: 3em;
`;

const StyledSearchBar = styled.div``;

const StyledLink = styled.a`
  margin: 1em;
`;

const ActionBar = styled.div`
  text-align: right;
  flex-grow: 2;
`;

const HeaderBar: React.FunctionComponent = () => (
  <StyledHeaderBar>
    <StyledSearchBar>
      <SearchBox />
    </StyledSearchBar>
    <ActionBar>
      <StyledLink href="/">Sign up</StyledLink>
      <StyledLink href="/">Login</StyledLink>
    </ActionBar>
  </StyledHeaderBar>
);

export default HeaderBar;
