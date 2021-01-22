import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Book, Series, useSeriesQuery } from '../../graphql/generated';
import ItemList from '../shared/ItemList';

function getDisplayName({ alternateTitle, issue, seriesName }: Book): string {
  return alternateTitle ? alternateTitle : `${seriesName} #${issue}`;
}

function convertBookToListItem(book: Book): { id: string; name: string } {
  return { id: book.id, name: getDisplayName(book) };
}

function Show(): JSX.Element {
  const { id: paramId } = useParams<{ id: string }>();
  const { loading, error, data } = useSeriesQuery({
    variables: { id: paramId }
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const { id, name, books } = Object.assign({} as Series, data?.series);
  const extended = books?.map((b) => convertBookToListItem(b));

  return (
    <>
      <h1>{name}</h1>

      <ItemList linkTo="/books/:id" list={extended} />
      <Link to={`/series/${id}/edit`}>Edit</Link>
    </>
  );
}

export default Show;
