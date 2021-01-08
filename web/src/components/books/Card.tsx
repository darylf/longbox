import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BookDetailsFragment } from '../../graphql/generated';

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

interface CardProps {
  book: BookDetailsFragment;
}

const Card = (props: CardProps): JSX.Element => (
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

export default Card;
