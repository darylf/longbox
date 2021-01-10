import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCard = styled.div`
  margin: 3em 0;
  padding: 0 1em;
`;

export const StyledImg = styled.img`
  width: 100%;
  display: block;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: #f00;
  }
`;
