import * as React from 'react';
import styled from 'styled-components';

interface FooterProps {
  children?: React.ReactNode;
}

const StyledFooter = styled.footer`
  grid-area: footer;
  margin-top: 3em;
  border-top: 2px solid #000;

  p {
    font-size: var(--smallestFontSize);
    color: #c0c0c0;
    text-align: right;
  }
`;

const Footer: React.FunctionComponent<FooterProps> = ({}: FooterProps) => (
  <StyledFooter>
    <p>Copyright &copy; 2021 Longbox.</p>
  </StyledFooter>
);

export default Footer;
