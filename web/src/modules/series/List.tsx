import * as React from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../../components/shared/ItemList';
import { Book, Series, useSeriesListQuery } from '../../hooks/graphql';
import Card from '../books/Card';

type BookExtended = Book & { name: string };

function addNames<T>(
  items: Array<T> = [],
  fn?: (arg0: T) => string
): Array<T & { name: string }> {
  return items.map((item) => addName(item, fn));
}

function addName<T extends {}>(
  item: T,
  fn?: (arg0: T) => string
): T & { name: string } {
  const xx = fn ? fn : (arg0: T) => '';
  return { ...item, name: xx(item) };
}

function SeriesList(): JSX.Element {
  const { loading, error, data } = useSeriesListQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const seriesList = data?.seriesList.nodes ?? [];

  const SeriesItems = seriesList.map((item) => {
    const { id, name, books } = Object.assign({} as Series, item);
    const modBooks = addNames(
      books as Array<Book>,
      ({ seriesName, issue }: Book) => `${seriesName} #${issue}`
    );
    return <ItemList title={name} linkTo="/books/:id" list={modBooks} />;
  });

  return (
    <>
      <h1>Series</h1>
      <p>Browse through an entire series</p>
      {SeriesItems}
    </>
  );
}

export default SeriesList;
