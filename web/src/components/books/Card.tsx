import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BookDetailsFragment } from '../../graphql/generated';

interface Props {
  book: BookDetailsFragment;
}

export default function Card({ book }: Props): JSX.Element {
  return (
    <StyledCard>
      <StyledLink to={`/books/${book.id}`}>
        <StyledImg
          src={`https://via.placeholder.com/504x771?text=${encodeURIComponent(
            book.title + ''
          )}`}
          alt={`${book.title} cover image`}
          title={`${book.title}`}
        />
        {book.title}
      </StyledLink>
    </StyledCard>
  );
}

export const StyledCard = styled.div`
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
