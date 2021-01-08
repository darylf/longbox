import * as React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const StyledHeader = styled.div`
  background-color: #fff;
`;

const Logo = styled.div``;

const Title = styled.h1``;

const ActionButtons = styled.div``;

interface HeaderProps {
  title: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  title
}: HeaderProps) => (
  <StyledHeader>
    <Logo>
      <Title>{title}</Title>
    </Logo>
    <Navigation />
    <ActionButtons></ActionButtons>
  </StyledHeader>
);

export default Header;
