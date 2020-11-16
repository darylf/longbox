import * as React from 'react';
import styled from 'styled-components';

interface FooterProps {
  children?: React.ReactNode;
}

const StyledFooter = styled.footer`
  grid-area: footer;
`;

const Footer: React.FunctionComponent<FooterProps> = ({}: FooterProps) => (
  <StyledFooter>&copy; 2020 Longbox</StyledFooter>
);

export default Footer;
