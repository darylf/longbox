import * as React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  grid-area: header;
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
    <ActionButtons></ActionButtons>
  </StyledHeader>
);

export default Header;
