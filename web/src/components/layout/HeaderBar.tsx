import * as React from 'react';
import styled from 'styled-components';

const StyledHeaderBar = styled.div`
  text-align: left;
  display: flex;
`;

const StyledSearchBar = styled.div`
  flex-grow: 3;
`;

const HeaderBar: React.FunctionComponent = () => (
  <StyledHeaderBar>
    <StyledSearchBar>
      <input placeholder="Search" />
    </StyledSearchBar>
    <div>
      <button>Sign up</button>
      <button>Login</button>
    </div>
  </StyledHeaderBar>
);

export default HeaderBar;
