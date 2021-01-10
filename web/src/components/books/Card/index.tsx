import * as React from 'react';
import { BookDetailsFragment } from '../../../graphql/generated';
import { StyledCard, StyledLink, StyledImg } from './styles/Card';

interface CardProps {
  book: BookDetailsFragment;
}

export default function Card(props: CardProps): JSX.Element {
  return (
    <StyledCard>
      <StyledLink to={`/books/${props.book.id}`}>
        <StyledImg
          src={`https://via.placeholder.com/504x771?text=${encodeURIComponent(
            props.book.title + ''
          )}`}
          alt={`${props.book.title} cover image`}
          title={`${props.book.title}`}
        />
        {props.book.title}
      </StyledLink>
    </StyledCard>
  );
}
