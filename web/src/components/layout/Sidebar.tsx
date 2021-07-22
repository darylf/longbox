import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "../shared/Icon";

const StyledSidebar = styled.div`
  grid-area: sidebar;
  border-right: 1px dotted #c1c1c1;
  height: 100vh;
  padding: 1em;
`;

const StyledNavigation = styled.nav`
  a {
    display: block;
    padding: 0.5em 0;
    text-decoration: none;
    color: #2e444e;
  }
  a:hover {
    color: #666;
  }
`;

const SidebarMenu = styled.ul`
  &:not(:first-of-type) {
    border-top: 1px dotted #3e3e3e;
  }
  padding: 0;
`;

const SidebarMenuItem = styled.li`
  list-style-type: none;
`;

const SidebarMenuItemLabel = styled.span``;

const StyledLogo = styled.div``;

const Logo: React.FunctionComponent = () => (
  <StyledLogo>
    <a href="/">
      <img
        src="https://via.placeholder.com/200x100?text=Logo"
        alt="Logo"
        title="Logo"
      />
    </a>
  </StyledLogo>
);

function Navigation(): JSX.Element {
  return (
    <StyledNavigation>
      <SidebarMenu>
        <SidebarMenuItem>
          <Link to="/series">
            <Icon name={"book"} />
            <SidebarMenuItemLabel>Browse Books</SidebarMenuItemLabel>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link to="/publishers">
            <Icon name={"archive"} />
            <SidebarMenuItemLabel>Browse Publishers</SidebarMenuItemLabel>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link to="/trending">
            <Icon name={"chart-line"} />
            <SidebarMenuItemLabel>Trending</SidebarMenuItemLabel>
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>
      <SidebarMenu>
        <SidebarMenuItem>
          <Link to="/my-collection">
            <Icon name={"heart"} />
            <SidebarMenuItemLabel>My Collection</SidebarMenuItemLabel>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link to="/my-wishlist">
            <Icon name={"list"} />
            <SidebarMenuItemLabel>My Wishlist</SidebarMenuItemLabel>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link to="/my-account">
            <Icon name={"cog"} />
            <SidebarMenuItemLabel>My Account</SidebarMenuItemLabel>
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>
      <SidebarMenu>
        <SidebarMenuItem>
          <Link to="/about">
            <Icon name={"info-circle"} />
            <SidebarMenuItemLabel>About</SidebarMenuItemLabel>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link to="/contribute">
            <Icon name={"github"} type="brand" />
            <SidebarMenuItemLabel>Contribute</SidebarMenuItemLabel>
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>
      <SidebarMenu>
        <SidebarMenuItem>
          <Link to="/admin">
            <Icon name={"tools"} />
            <SidebarMenuItemLabel>Admin</SidebarMenuItemLabel>
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>
    </StyledNavigation>
  );
}

const Sidebar: React.FunctionComponent = () => (
  <StyledSidebar>
    <Logo />
    <Navigation />
  </StyledSidebar>
);

export default Sidebar;
