import * as React from 'react';
import styled from 'styled-components';
import { Navigation } from '.';

const StyledSidebar = styled.div`
  grid-area: sidebar;
`;

const Sidebar: React.FunctionComponent = () => (
  <StyledSidebar>
    <Navigation />
  </StyledSidebar>
);

export default Sidebar;
