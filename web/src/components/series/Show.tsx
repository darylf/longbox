import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemList from '../../components/shared/ItemList';
import { Book, Series, useSeriesQuery } from '../../hooks/graphql';

function convertBookToListItem(book: Book): { id: string; name: string } {
  return { id: book.id, name: book.displayName };
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
      <Link to={`/series/${id}/edit`}>Edit Series Details</Link>
      <button>Add Book</button>
    </>
  );
}

export default Show;
