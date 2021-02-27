import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  bookId: string;
  bookName: string;
}

export default function Card({ bookId, bookName }: Props): JSX.Element {
  return (
    <StyledCard>
      <StyledLink to={`/books/${bookId}`}>
        <StyledImg
          src={`https://via.placeholder.com/504x771?text=${encodeURIComponent(
            bookName
          )}`}
          alt={`${bookName} cover image`}
          title={`${bookName}`}
        />
        {bookName}
      </StyledLink>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  margin: 3em 0;
  padding: 0 1em;
`;

const StyledImg = styled.img`
  width: 100%;
  display: block;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: #f00;
  }
`;
