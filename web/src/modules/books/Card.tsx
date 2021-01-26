import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BookDetailsFragment } from '../../graphql/generated';

interface Props {
  book: BookDetailsFragment;
}

function getDisplayName({
  alternateTitle,
  issue,
  seriesName
}: BookDetailsFragment): string {
  return alternateTitle ? alternateTitle : `${seriesName} #${issue}`;
}

export default function Card({ book }: Props): JSX.Element {
  const displayName = getDisplayName(book);
  return (
    <StyledCard>
      <StyledLink to={`/books/${book.id}`}>
        <StyledImg
          src={`https://via.placeholder.com/504x771?text=${encodeURIComponent(
            book.alternateTitle + ''
          )}`}
          alt={`${displayName} cover image`}
          title={`${displayName}`}
        />
        {displayName}
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
