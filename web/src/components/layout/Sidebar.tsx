import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSidebar = styled.div``;

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: React.FunctionComponent<SidebarProps> = ({}: SidebarProps) => (
  <StyledSidebar>
    <div>
      <ul>
        <li>
          <Link to="/books/new">Create New Book</Link>
        </li>
      </ul>
    </div>
  </StyledSidebar>
);

export default Sidebar;
