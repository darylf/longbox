import * as React from 'react';
import styled from 'styled-components';

const StyledHeaderBar = styled.div`
  text-align: left;
  display: flex;
  margin-bottom: 3em;
`;

const StyledSearchBar = styled.div`
  flex-grow: 3;
`;

const StyledLink = styled.a`
  margin: 1em;
`;

const HeaderBar: React.FunctionComponent = () => (
  <StyledHeaderBar>
    <StyledSearchBar>
      <input placeholder="Search" />
    </StyledSearchBar>
    <div>
      <StyledLink href="/">Sign up</StyledLink>
      <StyledLink href="/">Login</StyledLink>
    </div>
  </StyledHeaderBar>
);

export default HeaderBar;
