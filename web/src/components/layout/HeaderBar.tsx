import * as React from 'react';
import styled from 'styled-components';
import SearchBox from '../shared/SearchBox';

const StyledHeaderBar = styled.div`
  text-align: left;
  display: flex;
  margin-bottom: 3em;
`;

const StyledSearchBar = styled.div``;

const Button = styled.div`
  display: inline-block;
  text-align: center;
  background-color: #ccc;
`;

const StyledLink = styled.a`
  margin: 1em;
  padding: 3px;
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
      <Button>
        <StyledLink href="/">Sign up</StyledLink>
      </Button>
      <Button>
        <StyledLink href="/">Login</StyledLink>
      </Button>
    </ActionBar>
  </StyledHeaderBar>
);

export default HeaderBar;
